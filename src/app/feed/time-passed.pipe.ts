import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

type DateDto = {
  time: string,
  days?: number
}

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  constructor(private datePipe: DatePipe, private translateService: TranslateService) {
 
  }

  transform(value: any): string { 
    let days = moment().startOf('day').diff(moment(value).startOf('day'), 'days'); 

    let dateDto: DateDto = {
      time: this.datePipe.transform(value, 'shortTime'),
    }

    switch (days) {
      case 0:
        return this.translateService.instant("time-passed.today", dateDto);
      case 1:
        return this.translateService.instant("time-passed.yesterday", dateDto);
      default:
        dateDto.days = days;
        return this.translateService.instant("time-passed.amount", dateDto);
    }
  }
}