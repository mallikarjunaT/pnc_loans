import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators, MaxLengthValidator, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit {

  myform!: FormGroup;

  ngOnInit() {
    this.myform = this.fb.group({
      fname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]),
      lname: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]),
      contact: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[6-9][0-9]{9}$')]),
      state: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required, Validators.maxLength(6),Validators.pattern('[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3')]),
    })

  }
  constructor(private fb: FormBuilder) {

  }
  get mfm(): { [key: string]: AbstractControl } {
    return this.myform.controls;
  }
  submitform() {
    console.log(this.myform.value);
  }
}
