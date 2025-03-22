import { Component } from '@angular/core';
import {
  ReactiveFormsModule, AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import Validation from '../utils/validation';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-loan',
  imports: [ReactiveFormsModule, NgClass,],
  templateUrl: './create-loan.component.html',
  styleUrl: './create-loan.component.css'
})
export class CreateLoanComponent {
  form: FormGroup = new FormGroup({

  });
  loader = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        mstype: ['', Validators.required],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        dateofbirth: ['', Validators.required],
        pan: ['', Validators.required],
        adhar: ['', Validators.required],
        loantype: ['', Validators.required],
        phonenumber: ['', Validators.required],
        email: ['', Validators.required],
        homestreet: ['', Validators.required],
        homestreet2: ['', Validators.required],
        homecity: ['', Validators.required],
        homestate: ['', Validators.required],
        homezip: ['', Validators.required],
        jobtitle: ['', Validators.required],
        totalex: ['', Validators.required],
        monthlyincome: ['', Validators.required],
        workaddress: ['', Validators.required],
        workaddress2: ['', Validators.required],
        workcity: ['', Validators.required],
        workstate: ['', Validators.required],
        workzip: ['', Validators.required],
        loanamount: ['', Validators.required],
        terms: ['', Validators.required],
      },
    );
  }

  onSubmit(): void {
    this.submitted = true;
    this.loader = true;

   if (this.form.invalid) {
      return;
    } 

    console.log(JSON.stringify(this.form.value, null, 2));
    alert('Application form submitted successfully &  Upload required Documents')
    this.router.navigateByUrl('/')

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}
