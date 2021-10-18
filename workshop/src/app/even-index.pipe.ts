import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenIndex'
})
export class EvenIndexPipe implements PipeTransform {

  transform(value: string): boolean {
    if(parseInt(value) % 2){
      return false;
    }
    return true;
  }

}
