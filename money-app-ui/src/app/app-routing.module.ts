import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/transactions', pathMatch: 'full'}, // Redirect to transactions if the path is empty
  {path: 'transactions', component: TransactionListComponent}, // Route for listing transactions
  {path: 'transactions/new', component: TransactionCreateComponent} // New route for creating a transaction
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
