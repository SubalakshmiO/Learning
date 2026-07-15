import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-exercise14',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exercise14.html',
  styleUrl: './exercise14.scss'
})
export class Exercise14 {

  leadForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.leadForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: [''],
      status: ['New', Validators.required]
    });

  }

  onSubmit(): void {

    if (this.leadForm.valid) {

      console.log('Form Data:', this.leadForm.value);

      this.leadForm.reset({
        status: 'New'
      });

    }

  }

}