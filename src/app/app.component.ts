import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./security/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-center';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/students', title: 'Students'},
    { path: '/instructors', title: 'Instructors'},
    { path: '/about', title: 'About'}
  ];

  constructor(private router: Router, private authService: AuthService) {

  }

  getCurrentUserEmail() {
    let currentUser = this.authService.getCurrentUser();
    return currentUser ? currentUser.email : null;
  }

  signOut() {
    this.authService.signOut();
    console.log('signed out');
  }
}
