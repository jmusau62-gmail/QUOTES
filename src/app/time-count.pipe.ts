import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {
    const now = new Date();
    const nowWithNoTime: any = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysPassedInSec = Math.abs(nowWithNoTime-value);
    const dateCount = Math.floor(daysPassedInSec/(1000*60*60*24));

    return dateCount;
  }
}