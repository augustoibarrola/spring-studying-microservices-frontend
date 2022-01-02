import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/Shared/Models/customer';
import { CustomerService } from 'src/app/Shared/Services/customer-service.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  customer!: Customer;
  customerDetails = this.fb.group({

    firstName: ['', Validators.required],
    middleName: [''],
    lastName: [''],

    age: [''],
    phoneNumber: [''],
    email: [''],
    address: [''],
    ssn: [''],
  });

  constructor(private customerService: CustomerService, public modalRef: MdbModalRef<ModalComponent>, private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(customerDetails: FormGroup) {

    this.customer.firstName = this.customerDetails.value.firstName === "" ? this.customer.firstName : this.customerDetails.value.firstName;
    this.customer.middleName = this.customerDetails.value.middleName === "" ? this.customer.middleName : this.customerDetails.value.middleName;
    this.customer.lastName = this.customerDetails.value.lastName === "" ? this.customer.lastName : this.customerDetails.value.lastName;
    this.customer.age = this.customerDetails.value.age === "" ? this.customer.age : this.customerDetails.value.age;
    this.customer.phoneNumber = this.customerDetails.value.phoneNumber === "" ? this.customer.phoneNumber : this.customerDetails.value.phoneNumber;
    this.customer.eMail = this.customerDetails.value.eMail === "" ? this.customer.eMail : this.customerDetails.value.eMail;
    this.customer.address = this.customerDetails.value.address === "" ? this.customer.address : this.customerDetails.value.address;
    this.customer.ssn = this.customerDetails.value.ssn === "" ? this.customer.ssn : this.customerDetails.value.ssn;

    this.updateCustomerDetails();

  }

  updateCustomerDetails()
  {
    this.customerService.updateCustomerDetails(this.customer.id, this.customer).subscribe((updatedCustomer:Customer) => {
      this.customer = updatedCustomer;
      console.log("Customer was updated in backend. Updated Customer: \n\n", this.customer);
    });
    this.modalRef.close(this.customer);
  }

}
//TODO rename this component; inappropriately named