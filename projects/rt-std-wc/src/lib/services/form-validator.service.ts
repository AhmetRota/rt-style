import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
export enum FormStatusIcons {
  Cancel = 'cancel',
  Error = 'report_gmailerrorred',
  Approved = 'check'
}

@Injectable()
export class FormValidatorService {

  getErrorClass(form: FormGroup, field: string | Array<string> | any) {
    return (form.controls[field].invalid && (form.controls[field].touched || form.controls[field].dirty) ) ? 'form-field-not-valid' : '';
  }

  getIconName(form: FormGroup, field: string | Array<string> | any, isFocused: boolean = false): any {
    let iconName;
    if (!form.controls[field].touched && !form.controls[field].dirty && !isFocused) { // Nothing
      iconName = '';
    } else if (isFocused) {
      iconName = FormStatusIcons.Cancel;
    } else if (form.controls[field].invalid && form.controls[field].touched && !isFocused) { // Error
      iconName = FormStatusIcons.Error;
    } else if (!form.controls[field].invalid && form.controls[field].touched && !isFocused) { // Approves
      iconName = FormStatusIcons.Approved;
    }
    return iconName;
  }

}
