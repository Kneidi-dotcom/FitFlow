import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {catchError, map, Observable, of} from "rxjs";
import {UserTrainingsplanService} from "../services/user-trainingsplan.service";
import * as SHA256 from 'crypto-js/sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  experience!: any;

  constructor(private router: Router, private userService: UserService, private userTrainingsplanService: UserTrainingsplanService) {
  }

  registration() {
    this.router.navigate(['/registration']);
  }

  login(event: Event): void {
    event.preventDefault();

    const username = this.usernameInput.nativeElement.value;
    let password = this.passwordInput.nativeElement.value;

    const password_hash = SHA256(password).toString();

    const credentials = {
      username: username,
      password_hash: password_hash
    };

    this.userService.loginUser(credentials).pipe(
      catchError(err => {
        alert('Login fehlgeschlagen: ' + err.message);
        return of(null);
      })
    ).subscribe(user => {
      if (user) {
        this.giveTrainingPlans(user.user_id);
        this.router.navigate(['/overview'], {
          state: {userId: user.user_id}
        });
      } else {
        alert('Benutzername oder Passwort falsch');
      }
    });


  }

  giveTrainingPlans(userId: number): void {
    this.getExperience(userId).subscribe(exp => {
      console.log("Experience:", exp);

      if(exp == "anfänger"){
        console.log("anfänger");

        var trainingsPlan = 1;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

      }else if(exp == "fortgeschritten"){
        console.log("fortgeschritten");

        var trainingsPlan = 2;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 3;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 4;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

      }else if(exp == "experte"){
        console.log("experte");

        var trainingsPlan = 5;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 6;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 7;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 8;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 9;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

        trainingsPlan = 10;

        this.userTrainingsplanService.postUserTrainingsplans(userId, trainingsPlan).subscribe({
          next: response => {
            console.log('Erfolgreich zugewiesen:', response);
          },
          error: error => {
            console.error('Fehler bei der Zuweisung:', error);
          }
        });

      }
    });


  }

  getExperience(userId: number): Observable<string> {
    return this.userService.getUsers().pipe(
      map(users => {
        for (let user of users.$values) {
          if (user.user_id === userId) {
            return user.experience;
          }
        }
        return null;
      })
    );
  }

  back() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
