import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value
      .filter((book) => book.pages > args[0])
      .sort((obj1, obj2) => {
        return (obj1[args[1]] - obj2[args[1]]);
      }) : null;
  }
}

