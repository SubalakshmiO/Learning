import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LeadForm } from '../../components/lead-form/lead-form';

@Component({
  selector: 'app-exercise5',
  standalone: true,
  imports: [LeadForm,NgFor],
  templateUrl: './exercise5.html',
  styleUrl: './exercise5.scss'
})
export class Exercise5 {

  leads: any[] = [];

  onLeadAdded(lead: any) {

    this.leads.push(lead);

    console.log(this.leads);

  }

}