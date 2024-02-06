import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gretter'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value>10){
      return " This value is gretter then 10"
    }
    else{
      return "This Value is less then 10"
    }
    
  }

}
