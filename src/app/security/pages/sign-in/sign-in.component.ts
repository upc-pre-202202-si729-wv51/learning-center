import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.signInForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get email() { return this.signInForm.controls['email']; }

  get password() { return this.signInForm.controls['password']; }

  signIn() {
    this.authService.signIn(this.signInForm.value).subscribe(response => {
      this.authService.setToken(JSON.stringify(response.accessToken));
      this.authService.setCurrentUser(JSON.stringify(response.user));
      this.signInForm.reset();
      console.log(`accessToken: ${this.authService.getToken()}`);
      this.router.navigate(['home']).then();
    });
  }

  cancelSignIn() {
    console.log('Canceled');
  }

}
