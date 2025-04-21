import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionUpdateComponent } from './transaction-update/transaction-update.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/transactions', pathMatch: 'full'}, // Redirect to transactions if the path is empty
  {path: 'transactions', component: TransactionListComponent}, // Route for listing transactions
  {path: 'transactions/new', component: TransactionCreateComponent}, // New route for creating a transaction
  {path: 'transactions/:id/update', component: TransactionUpdateComponent}, // Route for editing a transaction
  {path: 'transactions/:id/details', component: TransactionDetailsComponent} // Route for viewing transaction details
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
