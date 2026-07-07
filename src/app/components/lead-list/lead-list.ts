import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

import { NgFor, NgIf, AsyncPipe } from '@angular/common';

import { LeadCard } from '../lead-card/lead-card';
import { LeadDetails } from '../lead-details/lead-details';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-lead-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    LeadCard,
    LeadDetails
  ],
  templateUrl: './lead-list.html',
  styleUrl: './lead-list.scss'
})
export class LeadList implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  leads: any[] = [];

  selectedLead: any;


  constructor(private leadService: LeadService) {}

  ngOnInit(): void {

    console.log('LeadList Initialized');


    this.leads = this.leadService.getLeads();

    if (this.leads.length > 0) {
      this.selectedLead = this.leads[0];
    }

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