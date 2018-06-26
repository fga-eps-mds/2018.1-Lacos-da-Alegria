import { FormControl } from '@angular/forms';

export class EmailValidation{
    /* Objective: this method will verify if the inserted email is a valid one.
    Parameters: it receives the inserted email.
    Returns: it returns a boolean. */

    static isValid(control: FormControl){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = re.test(control.value);

        if(!result){
            return{
                'email:validation:fail' : true
            }
        }
        return null;
    }
}
