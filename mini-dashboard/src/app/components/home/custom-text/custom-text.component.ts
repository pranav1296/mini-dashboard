import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss']
})
export class CustomTextComponent implements OnInit {
  customValue: string;
  constructor() {
    this.customValue = "Default Text";
  }
  ngOnInit(): void {
  }

}
