import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../Models/customer';

@Pipe({
  name: 'fullnamePipe'
})
export class FullnamePipePipe implements PipeTransform 
{
  transform(customer: Customer): string
  {
    return customer.firstName + " " + customer.middleName + " " + customer.lastName ;
  }
}
