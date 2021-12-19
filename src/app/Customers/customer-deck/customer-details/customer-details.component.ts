import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Shared/Services/customer-service.service';
// import { threadId } from 'worker_threads';
import { Customer } from 'src/app/Shared/Models/customer';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  
  modalRef!: MdbModalRef<ModalComponent>;

  customer!: Customer;
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
    console.log(this.customer);
  }

  getCustomerDetails(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomerDetails(id).subscribe(microserviceResponse => 
      this.customer = microserviceResponse
      );
  }
  
  openModal():any {
    this.modalRef = this.modalService.open(ModalComponent, {data: {customer: this.customer}});
    console.log("Customer:\n");
    console.log(this.customer);

  }

}
