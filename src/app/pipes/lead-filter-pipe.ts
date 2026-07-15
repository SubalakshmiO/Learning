import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadFilter',
  standalone: true
})
export class LeadFilterPipe implements PipeTransform {

  transform(leads: any[], searchText: string): any[] {

    if (!leads) {
      return [];
    }

    if (!searchText) {
      return leads;
    }

    const search = searchText.toLowerCase().trim();

    return leads.filter(lead =>
      lead.name.toLowerCase().includes(search) ||
      lead.company.toLowerCase().includes(search) ||
      lead.email.toLowerCase().includes(search)
    );

  }

}