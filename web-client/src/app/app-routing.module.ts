import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoanBookComponent } from './loan-book/loan-book.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';

const routes: Routes = [
  { path: 'books', component: ListBooksComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'user/add', component: AddUserComponent },
  { path: 'books/:id/loan', component: LoanBookComponent },
  { path: 'books/:id/loans', component: ListLoansComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'publishers/add', component: AddPublisherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
