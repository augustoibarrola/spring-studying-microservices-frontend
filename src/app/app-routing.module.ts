import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDeckComponent } from './Customers/customer-deck/customer-deck.component';
import { CustomerDetailsComponent } from './Customers/customer-deck/customer-details/customer-details.component';

const routes: Routes = [
  {path:'', redirectTo:'customers', pathMatch:'full'},
  {path: 'customers', component: CustomerDeckComponent}, 
  {path: 'customer/:phoneNumber', component: CustomerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
