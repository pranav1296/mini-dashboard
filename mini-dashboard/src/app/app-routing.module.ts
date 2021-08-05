import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BooksComponent } from "./components/home/books/books.component";
import { HomeComponent } from "./components/home/home.component";
import { MainCompComponent } from "./components/main-comp/main-comp.component";

const appRoutes: Routes = [
    { path: '', component: MainCompComponent },
    // {path: 'header', component: HeaderComponent}
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'books', component: BooksComponent }
        ]
    },

]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }