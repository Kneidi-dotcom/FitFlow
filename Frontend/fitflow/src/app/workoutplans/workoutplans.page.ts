import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {TrainingsplanService} from "../services/trainingsplan.service";
import {UserTrainingsplanService} from "../services/user-trainingsplan.service";

@Component({
  selector: 'app-workoutplans',
  templateUrl: './workoutplans.page.html',
  styleUrls: ['./workoutplans.page.scss'],
})
export class WorkoutplansPage implements OnInit {

  userId!: number;
  plans: any[] = [];
  userPlans: any;
  userPlan: any[] = [];

  exercises: any[] = [];
  exercisesArray: any[] = [];


  constructor(private router: Router, private trainingsplanService: TrainingsplanService, private userTrainingsplanService: UserTrainingsplanService) { }

  async ngOnInit() {
    this.userId = history.state.userId;

    try {
      // Verwende 'await' in einer 'async' Funktion
      this.userPlans = await this.userTrainingsplanService.getUserTrainingsplans(this.userId).toPromise();

      if (this.userPlans && this.userPlans.$values && this.userPlans.$values.length > 0) {
        this.userPlans.$values.forEach((plan: any) => {
          this.userPlan.push(plan.trainingsplan_id);
        });
      }
      for (let plan of this.userPlan) {
        this.plans.push(await this.trainingsplanService.getTrainingsplans(plan).toPromise());
      }


    } catch (error) {
      console.error('Fehler beim Laden der Trainingspläne:', error);
    }
  }

  back(){
    this.router.navigate(['/overview']);
  }
}
