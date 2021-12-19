import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers!: Customer[];
  constructor(private http: HttpClient) { }
  
  customersURL: string = "http://localhost:8200/customers";
  customerURL: string = "http://localhost:8200/customer/";

  getCustomers() {
    return this.http.get<Customer[]>(this.customersURL);
  }

  getCustomerDetails(id: number) {
    return this.http.get<Customer>(this.customerURL + id.toString());
  }

}
