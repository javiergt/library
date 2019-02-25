import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from '../services/notifications/notifications.service';
import { AppNotification } from '../services/notifications/appNotification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  display = false;

  constructor(private readonly notificationsService: NotificationsService) {}

  notification: AppNotification;

  ngOnInit() {
    this.notificationsService.notifyObservable.subscribe(notification => {
      this.notification = notification;
      this.display = true;
    });
  }

  onCloseClick() {
    this.display = false;
  }

  getNotificationTypeClass(): string {
    return 'is-' + this.notification.notificationType;
  }
}
