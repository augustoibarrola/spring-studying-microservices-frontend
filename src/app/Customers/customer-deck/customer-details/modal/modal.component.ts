import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/Shared/Models/customer';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    customer!:Customer;

    customerDetails = this.fb.group({
    controlFirstName: ['', Validators.required],
    controlMiddleName: [''],
    controlLastName: [''],
    controlAge: [''],
    controlPhoneNumber: [''],
    controlEMail: [''],
    controlAddress: [''],
    controlSSN: [''],
  });

  constructor(public modalRef: MdbModalRef<ModalComponent>, private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("This method needs to send new customer details (a FormGroup obj.) to customerdetailscomponent.\nMust be refactored")
  }

}
//TODO rename this component; inappropriately named