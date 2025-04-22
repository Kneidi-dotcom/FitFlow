import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private apiUrl = 'http://10.114.57.106:5125/api/Exercises';

  constructor(private http: HttpClient) { }

  getExercisesById(exerciseId: number){
    return this.http.get(this.apiUrl + '/' + exerciseId);
  }

}
