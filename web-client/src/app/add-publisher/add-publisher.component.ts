import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { LibraryService } from '../services/library/library.service';
import { Location } from '@angular/common';
import { AddPublisherRequest } from '../services/library/library_pb';
import { NotificationsService } from '../services/notifications/notifications.service';
import { AppNotifiationType } from '../services/notifications/appNotification';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css'],
})
export class AddPublisherComponent implements OnInit {
  form: FormGroup;

  get publisherName() {
    return this.form.get('publisherName');
  }

  constructor(
    private readonly libraryService: LibraryService,
    private readonly fb: FormBuilder,
    private readonly location: Location,
    private readonly notificationService: NotificationsService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      publisherName: ['', Validators.required],
    });
  }

  isInvalid(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  onSubmit() {
    const request = new AddPublisherRequest();
    request.setPublisherName(this.publisherName.value);

    this.libraryService.client.addPublisher(request, null, (err, response) => {
      if (err) {
        console.log(err);
        this.notificationService.notify({
          message: err.message,
          notificationType: AppNotifiationType.danger,
        });
      } else {
        console.log(response);
        this.notificationService.notify({
          message: 'Publisher added successfully',
          notificationType: AppNotifiationType.success,
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
