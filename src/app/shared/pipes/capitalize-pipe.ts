import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  /**
   * Used to change a string letter to capital, you can select which letter by including the letter position as an input.
   * Ex: {{STRING | capitalize:3}} ---- hello -> heLlo
   * @param input Is the string to be capitalize. If a number is received, the number is returned.
   * @param characterPosition is the number that indicates the position of the letter to be capitalized.
   */
  transform(input: string, characterPosition: number) {
    if (isNaN(Number(input))) {
      // If the input data is not a number, perform the operations to capitalize the correct letter.
      const char = characterPosition - 1 || 0;
      const letter = input.charAt(char).toUpperCase();
      const out = [];

      for (let i = 0; i < input.length; i++) {

        if (i === char) {
          out.push(letter);
        } else {
          out.push(input[i]);
        }
      }
      return out.join('');
    } else {
      return input;
    }
  }
}
