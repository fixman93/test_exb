import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fix: any, term: any): any {
    if ( term === undefined) return fix;
    return fix.filter(function(fix){
      return fix.name.toLowCase().includes(term.toLowCase());
    })
  }

}
