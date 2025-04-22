import {Component, OnInit, output} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {print} from "ionicons/icons";
import {UserTrainingsplanService} from "../services/user-trainingsplan.service";
import {catchError, map, throwError} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm: any;

  userID: any;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private userTrainingsPlanService: UserTrainingsplanService) {

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

  back() {
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    var userId;
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      const username = userData.username;
      this.userService.registerUser(userData).subscribe(
        response => {
          console.log('User registered successfully:', response.username);
        },
        error => {
          console.error('Registration failed:', error);
        }
      );

      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {
  }
}
