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

  getCustomers() 
  {
    return this.http.get<Customer[]>(this.customersURL);
  }

  getCustomerDetails(id: number) 
  {
    return this.http.get<Customer>(this.customerURL + id.toString());
  }

  postNewCustomer(newCustomer:Customer)
  {
    return this.http.post<Customer>(this.customersURL, newCustomer);
  }

  updateCustomerDetails(id: number, customer: Customer) 
  {
    console.log("CALLING BACKEND.... \n");
    return this.http.put<Customer>(this.customerURL + id.toString(), customer);
  }

}
