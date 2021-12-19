import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../Shared/Services/customer-service.service';
import { Customer } from '../../Shared/Models/customer';

@Component({
  selector: 'app-customer-deck',
  templateUrl: './customer-deck.component.html',
  styleUrls: ['./customer-deck.component.scss']
})
export class CustomerDeckComponent implements OnInit {

  customers!: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  
  getCustomers(): any {
    this.customerService.getCustomers().subscribe(customers => 
      {
        this.customers = customers;
      }, 
      (error: any) => console.log(error)
      );
  }

}
