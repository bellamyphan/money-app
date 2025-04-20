import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-transaction-details',
  standalone: false,
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.css'
})
export class TransactionDetailsComponent {

  id!: number;
  transaction: Transaction = new Transaction();
  loading: boolean = true; // Track loading state

  constructor(
    private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  // Fetch the transaction details when the component initializes
  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    try {
      // Fetch transaction data from the backend
      this.transaction = await firstValueFrom(this.transactionService.getTransactionById(this.id));
      this.loading = false; // Data has loaded, set loading to false
    } catch (error) {
      console.error('Failed to fetch transaction:', error);
      this.loading = false; // Even in case of error, stop the loading spinner
    }
  }

  goBack() {
    this.router.navigate(['/transactions']);
  }
}
