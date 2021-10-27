import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDeckComponent } from './customer-deck/customer-deck.component';

const routes: Routes = [
  {path:'', redirectTo:'customers', pathMatch:'full'},
  {path: 'customers', component: CustomerDeckComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
