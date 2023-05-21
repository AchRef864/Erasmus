import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) { } // Inject the Router

  submitForm() {
    // Logic for handling register form submission
    // You can implement your own registration logic here
    this.router.navigate(['/dashboard']);
    console.log('Submitted');
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to the registration page
  }
}
