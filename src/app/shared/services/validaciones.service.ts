import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {




  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  public noPuedeSer = (control: FormControl): ValidationErrors | null => {
    // console.log('ingresa valid');
    let valor = control.value?.trim().toLowerCase();
    // console.log(valor);

    if (valor === 'strider') {
      //console.log('return validacion');
      return {
        noStrider: true
      }
    }
    return null;
  }

  public camposIguales = (campo1: string, campo2: string) => {

    return (formGroup: AbstractControl): ValidationErrors | null => {
      //console.log(`camposIguales:${formGroup}`);

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({
          noIguales: true
        })
        return {
          noIguales: true
        }
      } else {

      }


      //formGroup.get(campo1)?.setErrors(null)
      formGroup.get(campo2)?.setErrors(null)


      return null;

    }
  };
}
