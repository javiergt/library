import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library/library.service';
import {
  ListBooksRequest,
  ListBooksResponse,
} from '../services/library/library_pb';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  data = Array<ListBooksResponse>();

  constructor(private readonly libraryService: LibraryService) {}

  ngOnInit() {
    const listBooksRequest = new ListBooksRequest();
    const stream = this.libraryService.client.listBooks(listBooksRequest);
    const bookList = Array<ListBooksResponse>();
    stream.on('data', response => {
      bookList.push(response);
    });
    stream.on('status', status => {
      console.log(status);
      if (status.code === 0) {
        this.data = bookList;
      }
    });
    stream.on('error', error => console.log(error));
  }

  getAuthors(element: ListBooksResponse) {
    return element
      .getAuthorsList()
      .map(e => e.getFirstName() + ' ' + e.getLastName())
      .join('; ');
  }
}
