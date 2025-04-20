import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  standalone: false,
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  transactions$!: Observable<Transaction[]>; // Declare an Observable for transactions

  constructor(private transactionService: TransactionService) {
    // Initialize the transactions array with sample data
  }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions(); // Assign Observable to the component property
  }
}
