import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  /**
   * Used to truncate big text and only show a portion of it.
   * @param input Is the value to be truncated.
   * @param length How many characters to display.
   * @param suffix String that will be displayed after the truncated string.
   * @param preserve true if you don't want to cut words.
   */
  transform(input: string, length: number, suffix: string, preserve: boolean) {
    length = (length === undefined) ? input.length : length;
    preserve = preserve || false;
    suffix = suffix || '';
    if (!this.isString(input) || (input.length <= length)) {
      return input;
    }
    return input.substring(0, (preserve)
      ? ((input.indexOf(' ', length) === -1) ? input.length : input.indexOf(' ', length))
      : length) + suffix;
  }
  isString(myVar: any) {
    if (typeof myVar === 'string' || myVar instanceof String) {
      return true;
    } else {
      return false;
    }
  }
}
