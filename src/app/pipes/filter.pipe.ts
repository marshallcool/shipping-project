import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      for (let property in item) {
        const value = item[property];
        if ((value && typeof value === 'string') || typeof value === 'number') {
          if (value.toString().toLowerCase().includes(searchText)) {
            return true;
          }
        }
      }
      return false;
    });
  }
}
