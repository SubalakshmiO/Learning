import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-lead-view',
  standalone: true,
  imports: [],
  templateUrl: './lead-view.html',
  styleUrl: './lead-view.scss'
})
export class LeadView implements OnInit {

  private route = inject(ActivatedRoute);
  private leadService = inject(LeadService);

  leadId: number = 0;

  lead: any;

  ngOnInit(): void {

    this.leadId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.lead = this.leadService.getLeadById(this.leadId);

  }

}