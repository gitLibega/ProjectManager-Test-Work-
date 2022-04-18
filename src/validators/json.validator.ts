import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class JsonValidator {

    public static check(): ValidatorFn {
        return function(control: AbstractControl): ValidationErrors | null {
            if(control.value) {
                try {
                    JSON.parse(control.value);
                } catch (e) {
                    return {json: true}
                }
            }
            return null;
        }
    }
}