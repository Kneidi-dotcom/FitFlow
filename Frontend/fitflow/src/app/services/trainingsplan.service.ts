import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrainingsplanService {

  private apiUrl = 'http://10.114.57.106:5125/api/TrainingPlan';

  constructor(private http: HttpClient) { }

  getTrainingsplans(userId: number){
    return this.http.get(this.apiUrl + '/' + userId);
  }

  getExercisesTrainingsplans(trainingPlanId: number){
    return this.http.get(this.apiUrl + '/' + trainingPlanId + '/Exercises');
  }
}
