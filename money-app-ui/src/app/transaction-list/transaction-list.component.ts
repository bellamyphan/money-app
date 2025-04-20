import { Component } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  standalone: false,
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  transactions!: Transaction[];

  ngOnInit(): void {
    this.transactions = [
      {
        id: 1,
        amount: 1200,
        bank: 'Chase',
        date: new Date('2025-04-01'),
        notes: 'Paycheck',
        type: 'Income'
      },
      {
        id: 2,
        amount: -300,
        bank: 'Chase',
        date: new Date('2025-04-03'),
        notes: 'Groceries at Walmart',
        type: 'Expense'
      },
      {
        id: 3,
        amount: -50,
        bank: 'Bank of America',
        date: new Date('2025-04-05'),
        notes: 'Gas for car',
        type: 'Expense'
      },
      {
        id: 4,
        amount: 500,
        bank: 'Wells Fargo',
        date: new Date('2025-04-10'),
        notes: 'Freelance payment',
        type: 'Income'
      },
      {
        id: 5,
        amount: -100,
        bank: 'Wells Fargo',
        date: new Date('2025-04-12'),
        notes: 'Electric bill',
        type: 'Expense'
      }
    ];
  }
}
