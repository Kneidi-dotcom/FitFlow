import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://10.114.57.106:5125/api/User'; // URL des Backends

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData); // JSON wird automatisch erstellt
  }

  getUser(id: number): Observable<any>{
    return this.http.get(this.apiUrl + '/' + id);
  }

  getUsers(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const users: any[] = response.$values; // Typisiere das Array als User[]

        const user = users.find((u: any) => // Typisiere 'u' als User
          u.username === credentials.username &&
          u.password_hash === credentials.password_hash
        );

        if (user) {
          return user; // Login erfolgreich
        } else {
          throw new Error('Ungültiger Benutzername oder Passwort');
        }
      }),
      catchError(error => {
        return throwError(() => new Error('Login fehlgeschlagen: ' + error.message));
      })
    );
  }
}
