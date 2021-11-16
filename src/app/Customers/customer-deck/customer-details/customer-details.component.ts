import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Shared/Services/customer-service.service';
// import { threadId } from 'worker_threads';
import { Customer } from 'src/app/Shared/Models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer?: Customer;
  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomerDetails();
    console.log(this.customer);
  }

  getCustomerDetails(){
    const phoneNumber = Number(this.route.snapshot.paramMap.get('phoneNumber'));
    this.customerService.getCustomerDetails(phoneNumber).subscribe(microserviceResponse => 
      this.customer = microserviceResponse
      );
  }

}
