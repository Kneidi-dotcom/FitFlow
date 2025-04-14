import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://10.114.57.106/register'; // URL des Backends

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData); // JSON wird automatisch erstellt
  }

  loginUser(){

  }
}
