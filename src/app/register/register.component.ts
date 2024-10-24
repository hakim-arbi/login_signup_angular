import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // For ngClass and other directives
import { FormsModule } from '@angular/forms';    // For ngModel

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import necessary modules
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';
  isSuccess: boolean = false;

  onSubmit() {
    if (this.password === this.confirmPassword) {
      this.message = 'Registration successful!';
      this.isSuccess = true;
    } else {
      this.message = 'Passwords do not match!';
      this.isSuccess = false;
    }

    // Clear form after submission
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }
}