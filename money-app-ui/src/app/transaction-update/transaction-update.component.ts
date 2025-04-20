import { Component } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-update',
  standalone: false,
  templateUrl: './transaction-update.component.html',
  styleUrl: './transaction-update.component.css'
})
export class TransactionUpdateComponent {

  transaction: Transaction = new Transaction();

  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
