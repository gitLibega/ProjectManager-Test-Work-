import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class DateValidator {

    public static check(): ValidatorFn {
        return function(control: AbstractControl): ValidationErrors | null {
            if(control.value) {
                if (isNaN(Date.parse(control.value))) {                    
                    return { "date": true };
                }
            }
            return null;
        }
    }
}