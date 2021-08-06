import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./components/home/books/books.component";
import { CustomTextComponent } from "./components/home/custom-text/custom-text.component";
import { HomeComponent } from "./components/home/home.component";
import { MainCompComponent } from "./components/main-comp/main-comp.component";

const appRoutes: Routes = [
    { path: '', component: MainCompComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'books', component: BooksComponent },
            { path: 'text', component: CustomTextComponent }
        ]
    },

]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }