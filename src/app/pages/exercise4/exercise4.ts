import { Component } from '@angular/core';
import { LeadList } from '../../components/lead-list/lead-list';
import { Pipeline } from '../../components/pipeline/pipeline';

@Component({
  selector: 'app-exercise4',
  standalone: true,
  imports: [
    LeadList,
    Pipeline
  ],
  templateUrl: './exercise4.html',
  styleUrl: './exercise4.scss'
})
export class Exercise4 {

}