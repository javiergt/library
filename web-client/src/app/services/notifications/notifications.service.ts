import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AppNotification } from './appNotification';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService implements OnDestroy {
  private notifySubject = new Subject<AppNotification>();

  notifyObservable = this.notifySubject.asObservable();

  constructor() {}

  public notify(notification: AppNotification) {
    if (notification) {
      this.notifySubject.next(notification);
    }
  }

  ngOnDestroy() {
    this.notifySubject.complete();
  }
}
