import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoanBookComponent } from './loan-book/loan-book.component';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListBooksComponent,
    AddUserComponent,
    LoanBookComponent,
    ListLoansComponent,
    AddBookComponent,
    AddPublisherComponent,
    NotificationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
