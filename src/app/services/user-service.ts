import { environment } from './../../../environmnent';
import { SignupUser } from './../components/shared/SignUp.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/shared/User';
import { UserResponse } from '../components/shared/UserResponse';
// import environment from 'first'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient)
  private BASE_URL = environment.apiUrl;

  createUser(user: SignupUser): Observable<UserResponse> {
    // console.log(user)
    return this.http.post<UserResponse>(`${this.BASE_URL}/users/register`, user);
  }
  
}
