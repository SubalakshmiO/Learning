import { Component } from '@angular/core';
import { LeadCard } from '../../components/lead-card/lead-card';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [
    LeadCard
  ],
  templateUrl: './exercise2.html',
  styleUrl: './exercise2.scss'
})
export class Exercise2 {

  lead = {
    name: 'John Smith',
    company: 'ABC Roofing',
    email: 'john@abcroofing.com',
    phone: '9876543210',
    status: 'New'
  };

}