import { Routes } from '@angular/router';
import { PncLoansComponent } from './pnc-loans/pnc-loans.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {
        path: 'loan',
        component: PncLoansComponent
    },
    {
        path: 'crate_loan',
        component: CreateLoanComponent
    },
    {
        path:'reactiveform',
        component:ReactiveFormsComponent
    }
];
