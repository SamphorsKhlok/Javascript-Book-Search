import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from "./components/books/books.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {path: 'books',component: BooksComponent},
  {path: 'error', component: ErrorComponent},
  {path: '',redirectTo: '/books', pathMatch: 'full'},
  {path: '**',redirectTo: '/error', pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
