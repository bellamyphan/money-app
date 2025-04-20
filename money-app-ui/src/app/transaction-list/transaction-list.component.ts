import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  standalone: false,
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  transactions$!: Observable<Transaction[]>; // Declare an Observable for transactions

  constructor(private transactionService: TransactionService, private router: Router) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions(); // Assign Observable to the component property
  }

  updateTransaction(id: number) {
    this.router.navigate(['transactions', id, 'update']); // Navigate to the update route with the transaction ID
  }

  deleteTransaction(id: number) {}
}
