import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {TransactionsComponent} from './dashboard/transactions/transactions.component';
import {ProfileComponent} from './profile/profile.component';
import {BudgetComponent} from './budget/budget.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
    { path: 'virement', loadChildren: () => import('./virement/virement.module').then(m => m.VirementModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
