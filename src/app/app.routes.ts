import { Routes } from '@angular/router';
import { PncLoansComponent } from './pnc-loans/pnc-loans.component';
import { CreateLoanComponent } from './create-loan/create-loan.component';

export const routes: Routes = [
    {
        path: '',
        component: PncLoansComponent
    },
    {
        path: 'crate_loan',
        component: CreateLoanComponent
    }
];
