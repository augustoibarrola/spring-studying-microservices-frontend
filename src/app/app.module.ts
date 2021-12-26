import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDeckComponent } from './Customers/customer-deck/customer-deck.component';
import { CustomerDetailsComponent } from './Customers/customer-deck/customer-details/customer-details.component';
import { ModalComponent } from './Customers/customer-deck/customer-details/modal/modal.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCustomerComponent } from './Customers/post-customer/post-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDeckComponent,
    CustomerDetailsComponent,
    ModalComponent,
    PostCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    OverlayModule,
    ReactiveFormsModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
