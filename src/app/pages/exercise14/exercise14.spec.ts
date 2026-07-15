import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise14 } from './exercise14';

describe('Exercise14', () => {
  let component: Exercise14;
  let fixture: ComponentFixture<Exercise14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise14);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
