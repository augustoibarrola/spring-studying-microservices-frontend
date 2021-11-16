import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http: HttpClient) { }
  
  customersURL: string = "http://localhost:8200/customers";

  getCustomers() {
    return this.http.get<Customer[]>(this.customersURL);
  }

  getCustomerDetails(phoneNumber: number) {
    return this.http.get<Customer>(this.customersURL + "/" + phoneNumber.toString());
  }

}
