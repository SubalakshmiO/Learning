import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadStatusPill } from './lead-status-pill';

describe('LeadStatusPill', () => {
  let component: LeadStatusPill;
  let fixture: ComponentFixture<LeadStatusPill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadStatusPill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadStatusPill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
