import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LibraryServiceClient } from './LibraryServiceClientPb';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  readonly client: LibraryServiceClient;

  constructor() {
    this.client = new LibraryServiceClient(environment.serviceUrl, null, null);
  }
}
