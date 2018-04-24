import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appTrim]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TrimDirective, multi: true }]
})
export class TrimDirective implements Validator {

  validate (control: AbstractControl): { [key: string]: any } {
    let value: string = control.value as string;
    if (value) {
      let originalLength = value.length;
      return value.trim().length < originalLength ? { 'trim': 'There cannot be leading or trailing spaces' } : null;
    } else {
      return null;
    }
  }
}
