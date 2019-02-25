import { Injectable } from '@angular/core';
import { AuthServiceClient } from './AuthServiceClientPb';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly client: AuthServiceClient;

  constructor() {
    this.client = new AuthServiceClient(environment.serviceUrl, null, null);
  }
}
