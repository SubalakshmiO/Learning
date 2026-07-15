import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LeadStatusPill } from '../lead-status-pill/lead-status-pill';

@Component({
  selector: 'app-lead-card',
  standalone: true,
  imports: [LeadStatusPill],
  templateUrl: './lead-card.html',
  styleUrl: './lead-card.scss'
})
export class LeadCard {

  @Input({ required: true }) lead!: {
    name: string;
    company: string;
    email: string;
    phone: string;
    status: string;
  };

  @Input() isSelected: boolean = false;

  // Module 5 - Outputs
  @Output() selectLead = new EventEmitter<any>();
  @Output() statusChange = new EventEmitter<string>();

  onSelectLead(): void {
    this.selectLead.emit(this.lead);
  }

}