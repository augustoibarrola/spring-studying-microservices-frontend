import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDeckComponent } from './Customers/customer-deck/customer-deck.component';
import { CustomerDetailsComponent } from './Customers/customer-deck/customer-details/customer-details.component';
import { PostCustomerComponent } from './Customers/post-customer/post-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'customers', pathMatch:'full'},
  {path: 'customers', component: CustomerDeckComponent}, 
  {path: 'customer/:id', component: CustomerDetailsComponent},
  {path: 'new', component: PostCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
