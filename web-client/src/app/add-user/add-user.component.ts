import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { AddUserRequest } from '../services/auth/auth_pb';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly location: Location
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  isInvalid(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  onSubmit() {
    const request = new AddUserRequest();
    request.setFirstName(this.firstName.value);
    request.setLastName(this.lastName.value);
    request.setEmail(this.email.value);
    this.authService.client.addUser(request, null, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.getId());
        this.goBack();
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
