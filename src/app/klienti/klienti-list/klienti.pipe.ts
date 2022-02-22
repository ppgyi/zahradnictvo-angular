import {Pipe} from "@angular/core";

@Pipe({name: 'filter', pure: false})
export class FilterKlientPipe {
  transform(value: any, filterString: string, propName: string) {
    if(value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
     for(const item of value) {
       if(item[propName] === filterString) {
         resultArray.push(item);
       }
     }
     return resultArray;
  }
}
