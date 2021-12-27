import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Shared/Services/customer-service.service';
import { Customer } from 'src/app/Shared/Models/customer';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.scss']
})
export class PostCustomerComponent implements OnInit {

  newCustomer!:Customer;
  newCustomerDetails = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: [''],

    age: [''],
    phoneNumber: [''],
    email: [''],
    address: [''],
    ssn: [''],
  });
  constructor(private customerService:CustomerService, private fb:FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(newCustomerDetails:FormGroup){
    
    console.log(newCustomerDetails.value);
  }

}
