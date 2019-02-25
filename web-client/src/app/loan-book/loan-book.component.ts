import { Component, OnInit } from '@angular/core';
import { ListUsersResponse, ListUsersRequest } from '../services/auth/auth_pb';
import { AuthService } from '../services/auth/auth.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  GetBookResponse,
  GetBookRequest,
  LoanBookRequest,
} from '../services/library/library_pb';
import { LibraryService } from '../services/library/library.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationsService } from '../services/notifications/notifications.service';
import { AppNotifiationType } from '../services/notifications/appNotification';

@Component({
  selector: 'app-loan-book',
  templateUrl: './loan-book.component.html',
  styleUrls: ['./loan-book.component.css'],
})
export class LoanBookComponent implements OnInit {
  users: ListUsersResponse[];

  form: FormGroup;

  book: GetBookResponse;

  get bookTitle(): string {
    return this.book ? this.book.getBookTitle() : '';
  }

  get userId() {
    return this.form.get('userId');
  }

  constructor(
    private readonly authService: AuthService,
    private readonly libraryService: LibraryService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly notificationService: NotificationsService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userId: [null, Validators.required],
    });

    const request = new ListUsersRequest();
    const data = new Array<ListUsersResponse>();

    const stream = this.authService.client.listUsers(request, null);
    stream.on('data', response => {
      data.push(response);
    });

    const getBookRequest = new GetBookRequest();
    getBookRequest.setBookId(+this.route.snapshot.paramMap.get('id'));

    this.libraryService.client.getBook(
      getBookRequest,
      null,
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          this.book = response;
          console.log(response);
        }
      }
    );

    stream.on('status', status => {
      if (status.code === 0) {
        this.users = data;
      }
      console.log(status);
    });
  }

  getUserDisplayText(user: ListUsersResponse): string {
    return `${user.getFirstName()} ${user.getLastName()} <${user.getEmail()}>`;
  }

  goBack() {
    this.location.back();
  }

  isInvalid(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  onSubmit() {
    const request = new LoanBookRequest();
    request.setBookId(this.book.getBookId());
    request.setUserId(+this.userId.value);
    this.libraryService.client.loanBook(request, null, (err, response) => {
      if (err) {
        this.notificationService.notify({
          message: err.message,
          notificationType: AppNotifiationType.danger,
        });
        console.log(err);
      } else {
        this.notificationService.notify({
          message: 'Loaned sucessfully',
          notificationType: AppNotifiationType.success,
        });
        this.location.back();
      }
    });
  }
}
