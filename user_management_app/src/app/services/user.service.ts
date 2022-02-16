import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
