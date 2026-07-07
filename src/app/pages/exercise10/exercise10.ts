import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../services/api';
import { User } from '../../models/user';

@Component({
  selector: 'app-exercise10',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './exercise10.html',
  styleUrl: './exercise10.scss'
})
export class Exercise10 implements OnInit {

  private api = inject(ApiService);

  users: User[] = [];

  loading = true;

  errorMessage = '';

  ngOnInit(): void {

    this.loadUsers();

  }

  loadUsers() {

    this.api.getUsers().subscribe({

      next: (data) => {

        this.users = data;

        this.loading = false;

      },

      error: (err) => {

        console.error(err);

        this.errorMessage = 'Failed to load users';

        this.loading = false;

      }

    });

  }

  createUser() {

    const newUser: User = {

      id: 11,
      name: 'Suba Lakshmi',
      email: 'suba@test.com',
      phone: '9876543210',
      website: 'mysite.com'

    };

    this.api.addUser(newUser).subscribe({

      next: (result) => {

        console.log('User Created');

        console.log(result);

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}