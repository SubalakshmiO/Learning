import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf
  ],
  templateUrl: './pipeline.html',
  styleUrl: './pipeline.scss'
})
export class Pipeline {

  private leadService = inject(LeadService);

  // Shared lead state
  leads$ = this.leadService.leads$;

  // Module 9 - Derived stage counts
  stageCounts$ = this.leadService.stageCounts$;

}