import {Component, OnInit, output} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {print} from "ionicons/icons";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm: any;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {

    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password_hash: ['', Validators.required],
      experience: ['', Validators.required],
      size: ['', Validators.required],
      bodyWeight: ['', Validators.required],
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {

    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value; // User-Daten als JavaScript-Objekt
      this.userService.registerUser(userData).subscribe(
        response => {
          console.log('User registered successfully:', response);
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {
  }

}
