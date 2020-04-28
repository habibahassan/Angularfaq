import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  register(username: string, email: string, password: string) {
      return this.http.post<any>(environment.baseUrl + 'api/v1/register/', {username, email, password});

  }
  login(username: string, password: string) {
    return this.http.post<any>(environment.baseUrl + 'api/v1/rest-auth/login/', {username,  password});
  }
}
