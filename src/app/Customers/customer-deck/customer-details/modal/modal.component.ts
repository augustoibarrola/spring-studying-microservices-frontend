import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

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
    console.log("this method needs to send new customer details (a FormGroup obj.) to customerdetailscomponent.\n must be refactored")
  }

}
//TODO rename this component; inappropriately named