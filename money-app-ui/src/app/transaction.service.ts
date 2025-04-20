import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/api/v1'; // Base URL for the API
  private transactionsUrl = `${this.baseUrl}/transactions`; // URL for transactions endpoint

  constructor(private httpClient: HttpClient) { }

  getTransactions(): Observable<Transaction[]> { // Fetch all transactions from the API
    return this.httpClient.get<Transaction[]>(this.transactionsUrl);
  }
}
