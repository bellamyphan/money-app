import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionCreateComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule for browser-specific features
    AppRoutingModule // Import the routing module for navigation
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // New way to configure HttpClient
    provideClientHydration(withEventReplay()), // Keep the original hydration provider
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
