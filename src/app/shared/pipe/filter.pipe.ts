import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string): any[] {
    if (!value) {
      return [];
    }
    if (!searchTerm) {
      return value;
    }
console.log(value);
    return value.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
