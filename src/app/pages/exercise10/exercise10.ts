import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ApiService, ApiLead } from '../../services/api';

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

  leads: ApiLead[] = [];

  loading = true;

  errorMessage = '';

  ngOnInit(): void {

    this.loadLeads();

  }

  loadLeads(): void {

    this.loading = true;
    this.errorMessage = '';

    this.api.getLeads().subscribe({

      next: (data) => {

        this.leads = data;
        this.loading = false;

      },

      error: (err) => {

        console.error(err);

        this.errorMessage = 'Failed to load leads';
        this.loading = false;

      }

    });

  }

}