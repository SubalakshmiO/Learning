import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

export interface ApiLead {
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  getLeads() {

    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(users =>
          users.map(user => ({
            name: user.name,
            company: user.website,
            email: user.email,
            phone: user.phone,
            status: 'New'
          }))
        )
      );

  }

}