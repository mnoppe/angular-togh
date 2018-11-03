import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse'
})
export class EllipsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === undefined) {
      return value;
    }
    if (value.length > args) {
      const subst = value.substr(0, args - 1);
      return subst.substr(0, subst.lastIndexOf(' ')) + ' ... ';
    } else {
      return value;
    }
  }

}
