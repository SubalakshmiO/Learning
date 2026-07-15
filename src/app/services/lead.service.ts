import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private initialLeads = [
    {
      name: 'John Smith',
      company: 'ABC Roofing',
      email: 'john@abcroofing.com',
      phone: '9876543210',
      status: 'New'
    },
    {
      name: 'Alice Johnson',
      company: 'XYZ Construction',
      email: 'alice@xyz.com',
      phone: '9123456780',
      status: 'Qualified'
    },
    {
      name: 'David Wilson',
      company: 'Home Repairs',
      email: 'david@home.com',
      phone: '9988776655',
      status: 'Contacted'
    }
  ];
  private leadsSubject = new BehaviorSubject(this.initialLeads);
  leads$ = this.leadsSubject.asObservable();
  stageCounts$ = this.leads$.pipe(
    map((leads: any[]) => ({
      New: leads.filter(lead => lead.status === 'New').length,
      Contacted: leads.filter(lead => lead.status === 'Contacted').length,
      Qualified: leads.filter(lead => lead.status === 'Qualified').length,
      Won: leads.filter(lead => lead.status === 'Won').length,
      Lost: leads.filter(lead => lead.status === 'Lost').length
    }))
  );
  

  getLeads() {
    return this.initialLeads;
  }
  addLead(lead: any) {
    this.initialLeads.push(lead);
    this.leadsSubject.next(this.initialLeads);
  }
  getLeadById(id: number) {
    return this.initialLeads[id - 1];
  }
}