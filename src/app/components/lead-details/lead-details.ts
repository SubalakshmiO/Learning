import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeadStatusPill } from '../lead-status-pill/lead-status-pill';

@Component({
  selector: 'app-lead-details',
  standalone: true,
  imports: [LeadStatusPill],
  templateUrl: './lead-details.html',
  styleUrl: './lead-details.scss'
})
export class LeadDetails {

  @Input({ required: true }) lead!: {
    name: string;
    company: string;
    email: string;
    phone: string;
    status: string;
  };

  @Output() statusChange = new EventEmitter<string>();

  changeStatus(): void {

    let nextStatus = '';

    switch (this.lead.status) {

      case 'New':
        nextStatus = 'Contacted';
        break;

      case 'Contacted':
        nextStatus = 'Qualified';
        break;

      case 'Qualified':
        nextStatus = 'Won';
        break;

      case 'Won':
        nextStatus = 'Lost';
        break;

      case 'Lost':
        nextStatus = 'New';
        break;

      default:
        nextStatus = 'New';
        break;

    }

    this.statusChange.emit(nextStatus);

  }

}