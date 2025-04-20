import { Component } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-create',
  standalone: false,
  templateUrl: './transaction-create.component.html',
  styleUrl: './transaction-create.component.css'
})
export class TransactionCreateComponent {

  transaction: Transaction = new Transaction();

  onSubmit() {
    console.log('Transaction created:', this.transaction);
    // Here you would typically send the transaction to a service to save it
    // For example: this.transactionService.createTransaction(this.transaction).subscribe(...);
  }
}
