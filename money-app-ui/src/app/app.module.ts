import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionUpdateComponent } from './transaction-update/transaction-update.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionCreateComponent,
    TransactionUpdateComponent,
    TransactionDetailsComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule for browser-specific features
    AppRoutingModule, // Import the routing module for navigation
    FormsModule // Import FormsModule for template-driven forms
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // New way to configure HttpClient
    provideClientHydration(withEventReplay()), // Keep the original hydration provider
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
