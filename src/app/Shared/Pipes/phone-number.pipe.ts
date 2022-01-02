import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneNumberPipe'
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: number): string {
    const phoneNum = "(" + value.toString().slice(0, 3) + ") - " + value.toString().slice(3, 6) + " - " + value.toString().slice(6);
    
    
    return phoneNum;
  }
}
