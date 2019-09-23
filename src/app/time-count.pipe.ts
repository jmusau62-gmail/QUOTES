import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const now = new Date();
    const nowWithNoDate: any = new Date(now.getFullYear(), now.getMonth(), now.getDay());
    const timeIntake = Math.abs( nowWithNoDate - value );
    const secondsInADay = 86400;
    const timeDifference = timeIntake * 0.0001;
    const dateCount = timeDifference / secondsInADay;

    return dateCount;
  }
}