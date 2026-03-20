import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormarting',
})
export class NameFormartingPipe implements PipeTransform {

  transform(value: string, max = 10): string {
    return value.length > max ? value.slice(0, max) + "..." : value;
  }

}
