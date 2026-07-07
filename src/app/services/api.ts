import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  addUser(user: User) {
    return this.http.post<User>(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
  }

}