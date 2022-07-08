import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const position = args[0] ?? 0;
    return value[position];
  }

}
