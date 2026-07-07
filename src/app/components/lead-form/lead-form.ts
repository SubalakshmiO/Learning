import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './lead-form.html',
  styleUrl: './lead-form.scss'
})
export class LeadForm {

  private leadService = inject(LeadService);

  newLead = {
    name: '',
    company: '',
    email: '',
    phone: '',
    status: 'New'
  };

  @Output() leadAdded = new EventEmitter<any>();

  addLead() {

    if (!this.newLead.name || !this.newLead.email) {
      return;
    }

    this.leadService.addLead({ ...this.newLead });

    this.leadAdded.emit({ ...this.newLead });

    this.newLead = {
      name: '',
      company: '',
      email: '',
      phone: '',
      status: 'New'
    };

  }

}