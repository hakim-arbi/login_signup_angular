import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone : true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  isSuccess: boolean = false;

  onSubmit() {
    // Simple logic to check login
    if (this.username === 'admin' && this.password === 'password') {
      this.message = 'Login successful!';
      this.isSuccess = true;
    } else {
      this.message = 'Invalid credentials, please try again.';
      this.isSuccess = false;
    }

    // Clear form after submission
    this.username = '';
    this.password = '';
  }
}
