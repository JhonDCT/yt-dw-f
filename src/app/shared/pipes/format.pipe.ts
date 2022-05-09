import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split(';')[0];
  }
}
