import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library/library.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  ListPublishersResponse,
  ListPublishersRequest,
  ListAuthorsRequest,
  ListAuthorsResponse,
  AddBookRequest,
} from '../services/library/library_pb';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  form: FormGroup;
  publishers: ListPublishersResponse[];
  authors: ListAuthorsResponse[];

  get publisherId() {
    return this.form.get('publisherId');
  }

  get authorIds() {
    return this.form.get('authorIds');
  }

  get title() {
    return this.form.get('title');
  }

  get copies() {
    return this.form.get('copies');
  }

  constructor(
    private readonly libraryService: LibraryService,
    private readonly fb: FormBuilder,
    private readonly location: Location
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      authorIds: [[], [Validators.required, Validators.minLength(1)]],
      publisherId: [0, Validators.required],
      copies: [1, [Validators.required, Validators.min(1)]],
    });

    this.getPublishers();
    this.getAuthors();
  }

  private getPublishers() {
    const request = new ListPublishersRequest();
    const stream = this.libraryService.client.listPublishers(request);
    const publishersList = new Array<ListPublishersResponse>();

    stream.on('data', response => publishersList.push(response));

    stream.on('status', status => {
      if (status.code === 0) {
        this.publishers = publishersList;
      } else {
        console.log(status);
      }
    });
  }

  private getAuthors() {
    const request = new ListAuthorsRequest();
    const stream = this.libraryService.client.listAuthors(request);
    const authorsList = new Array<ListAuthorsResponse>();

    stream.on('data', response => authorsList.push(response));

    stream.on('status', status => {
      if (status.code === 0) {
        this.authors = authorsList;
      } else {
        console.log(status);
      }
    });
  }

  isInvalid(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  onSubmit() {
    const request = new AddBookRequest();

    request.setTitle(this.title.value);
    request.setAuthorsList(this.authorIds.value);
    request.setPublisherId(this.publisherId.value);
    request.setCopies(this.copies.value);

    this.libraryService.client.addBook(request, null, err => console.log(err));
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
