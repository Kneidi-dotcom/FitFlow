import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserTrainingsplanService {

  private apiUrl = 'http://10.114.57.106:5125/api/UserTrainingPlan';

  constructor(private http: HttpClient) { }

  getUserTrainingsplans(userId: number){
    return this.http.get(this.apiUrl + '/' + userId);
  }

  postUserTrainingsplans(userId: number, planId: number,): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userId}/assign/${planId}`, null);
  }
}
