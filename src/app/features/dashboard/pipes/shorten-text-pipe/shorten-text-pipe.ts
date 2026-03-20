import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
  standalone: true,
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, max = 20): string {
    return value.length > max ? value.slice(0, max) + "..." : value;
  }

}
