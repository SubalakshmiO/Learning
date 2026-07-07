import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lead-status-pill',
  standalone: true,
  imports: [],
  template: `
  <div class="status-pill" [class]="getStatusClass()">
    {{ getStatusIcon() }} {{ label }}
  </div>
  `,
  styleUrl: './lead-status-pill.scss'
})
export class LeadStatusPill {

  @Input() status: string = 'New';

  // Returns the icon based on the status
  getStatusIcon(): string {

    switch (this.status) {

      case 'New':
        return '🟢';

      case 'Contacted':
        return '🟡';

      case 'Qualified':
        return '🔵';

      case 'Won':
        return '🟣';

      case 'Lost':
        return '🔴';

      default:
        return '⚪';

    }

  }

  // Returns the display label (Module 1 requirement)
  get label(): string {

    switch (this.status) {

      case 'New':
        return 'New';

      case 'Contacted':
        return 'Contacted';

      case 'Qualified':
        return 'Qualified';

      case 'Won':
        return 'Won';

      case 'Lost':
        return 'Lost';

      default:
        return 'Unknown';

    }

  }

  // Returns the CSS class
  getStatusClass(): string {

    switch (this.status) {

      case 'New':
        return 'new';

      case 'Contacted':
        return 'contacted';

      case 'Qualified':
        return 'qualified';

      case 'Won':
        return 'won';

      case 'Lost':
        return 'lost';

      default:
        return '';

    }

  }

}