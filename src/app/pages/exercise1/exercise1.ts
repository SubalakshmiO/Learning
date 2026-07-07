import { Component } from '@angular/core';
import { LeadStatusPill } from '../../components/lead-status-pill/lead-status-pill';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [
    LeadStatusPill
  ],
  templateUrl: './exercise1.html',
  styleUrl: './exercise1.scss'
})
export class Exercise1 {

}