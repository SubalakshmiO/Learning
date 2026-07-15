import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  DestroyRef,
  inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { LeadCard } from '../lead-card/lead-card';
import { LeadDetails } from '../lead-details/lead-details';
import { LeadService } from '../../services/lead.service';
import { LeadFilterPipe } from '../../pipes/lead-filter-pipe';

@Component({
  selector: 'app-lead-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    RouterLink,
    FormsModule,
    LeadFilterPipe,
    LeadCard,
    LeadDetails
  ],
  templateUrl: './lead-list.html',
  styleUrl: './lead-list.scss'
})
export class LeadList implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  searchText: string = '';

  leads: any[] = [];

  selectedLead: any;

  // Used to automatically clean up subscriptions
  private destroyRef = inject(DestroyRef);

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {

    console.log('LeadList Initialized');

    this.leadService.leads$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(leads => {

        this.leads = leads;

        if (!this.selectedLead && leads.length > 0) {
          this.selectedLead = leads[0];
        }

      });

  }

  ngAfterViewInit(): void {

    this.searchInput?.nativeElement.focus();

  }

  ngOnDestroy(): void {

    console.log('LeadList Destroyed');

  }

  onLeadSelected(lead: any): void {

    this.selectedLead = lead;

  }

  onStatusChanged(newStatus: string): void {

    this.selectedLead.status = newStatus;

  }

}