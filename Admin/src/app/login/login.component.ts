// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { } // Inject the Router

  submitForm() {
    // Logic for handling login form submission
    // You can implement your own authentication logic here
    console.log('Submitted');
  }

  goToRegistration() {
    this.router.navigate(['/register']); // Navigate to the registration page
  }
}
