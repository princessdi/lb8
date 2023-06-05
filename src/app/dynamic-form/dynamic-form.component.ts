import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  streetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.streetForm = this.formBuilder.group({
      streetName: ['', Validators.required],
      length: ['', Validators.required],
      history: [''],
      district: [''],
      previousNames: this.formBuilder.array([]),
    });
  }

  get previousNames() {
    return this.streetForm.get('previousNames') as FormArray;
  }

  addPreviousName() {
    this.previousNames.push(this.formBuilder.control(''));
  }

  removePreviousName(index: number) {
    this.previousNames.removeAt(index);
  }

  submitForm() {
    if (this.streetForm.valid) {
      console.log(this.streetForm.value);
    } else {
      // Обробка недійсної форми
    }
  }
}
