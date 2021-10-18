import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value: number, addValue?: number): number {
    if(isNaN(addValue)){
      return value;
    }else{
      return value + addValue;
    }
  }

}
