import { Component, OnInit, ViewChild } from '@angular/core';
import { exampleData } from '../../../data/example';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface IBooks {
  id: string,
  name: string,
  type: string
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  tableContent: any;
  dataSource: MatTableDataSource<IBooks>;
  books: IBooks[];
  columns: string[] = ['id', 'name', 'type'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
    this.books = this.getBooks();
    this.dataSource = new MatTableDataSource(this.books);
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
  getBooks() {
    const books: IBooks[] = []
    for (let ele of exampleData.data) {
      let book = { id: '', name: '', type: '' };
      book.id = ele.id;
      book.name = ele.attributes.content;
      book.type = ele.attributes.display_properties.type;
      books.push(book);
    }
    return books;
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
