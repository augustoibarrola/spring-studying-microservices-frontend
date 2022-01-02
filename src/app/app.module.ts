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
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCustomerComponent } from './Customers/post-customer/post-customer.component';
import { PhoneNumberPipe } from './Shared/Pipes/phone-number.pipe';
import { FullnamePipePipe } from './Shared/Pipes/fullname-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDeckComponent,
    CustomerDetailsComponent,
    ModalComponent,
    PostCustomerComponent,
    PhoneNumberPipe,
    FullnamePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    OverlayModule,
    MdbRippleModule,
    ReactiveFormsModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
