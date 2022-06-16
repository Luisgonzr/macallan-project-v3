import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  /**
   * Used to change TIMESTAMP format to how much time has passed between current date and TIMESTAMP date.
   * If you want it to be in spanish you have to add the input 'spanish'
   * Ex: {{TIMESTAMP | timeago:'spanish'}}
   * @param timeStamp Old timeStamp to be compared with actual one. Ex: 2019-12-31 00:00:00
   * @param language String language, can be spanish or english by default
   */
  transform(timeStamp: string, language: string) {
    const time = timeStamp.split(/[- :]/);
    const previous: any = new Date(Date.UTC(Number(time[0]), Number(time[1])
      - 1, Number(time[2]), Number(time[3]), Number(time[4]), Number(time[5])));
    const current: any = new Date();

    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;
    console.log(language);
    if (language === 'spanish') {
      if (elapsed < msPerMinute) {
        return 'Hace ' + Math.round(elapsed / 1000) + ' segundos';
      } else if (elapsed < msPerHour) {
        return 'Hace ' + Math.round(elapsed / msPerMinute) + ' minutos';
      } else if (elapsed < msPerDay) {
        return 'Hace ' + Math.round(elapsed / msPerHour) + ' horas';
      } else if (elapsed < msPerMonth) {
        return 'Aproximadamente hace ' + Math.round(elapsed / msPerDay) + ' días';
      } else if (elapsed < msPerYear) {
        const res = Math.round(elapsed / msPerMonth);
        if (res === 1) {
          return 'Aproximadamente hace ' + res + ' mes';
        } else {
          return 'Aproximadamente hace ' + res + ' meses';
        }
      } else {
        return 'Aproximadamente hace ' + Math.round(elapsed / msPerYear) + ' años';
      }
    } else {
      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds ago';
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes ago';
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours ago';
      } else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
      } else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
      } else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
      }
    }
  }
}
