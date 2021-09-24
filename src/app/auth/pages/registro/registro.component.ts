import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { emailPattern, nombreApellidoPattern, noPuedeSer } from 'src/app/shared/validator/validaciones';
import { ValidacionesService } from '../../../shared/services/validaciones.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validacionesServ: ValidacionesService,
    private readonly emailValidarServ:EmailValidatorService
  ) { }

  public miForm: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validacionesServ.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validacionesServ.emailPattern)],[this.emailValidarServ]],
    username: ['', [Validators.required, this.validacionesServ.noPuedeSer]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validators: [
      this.validacionesServ.camposIguales('password','confirmPassword')
    ]
  });

get emailErrorMsj():string{
  const error=this.miForm.get('email')?.errors;
  if(error?.required){
    return 'Email Obligatorio.';
  } else   if(error?.pattern){
    return 'Formato Incorrecto.';
  } else   if(error?.emailTomado){
    return 'Email Tomado.';
  }
  return '';
}

  ngOnInit(): void {

    this.miForm.reset({
      nombre: 'Johan Arroyo',
      email: 'test1@test.com',
      username: 'johan',
      password:'123456',
      confirmPassword:'123456'
    })
  }

  public validaCampo0(campo: string) {
    return this.miForm.get(campo)?.invalid
      && this.miForm.get(campo)?.touched;
  }


  public emailRequired(){
    console.log(this.miForm.get('email')?.errors?.required
    && this.miForm.get('email')?.touched);
    return this.miForm.get('email')?.errors?.required
    && this.miForm.get('email')?.touched;
  }

  public emailFormato(){
    return this.miForm.get('email')?.errors?.pattern
    && this.miForm.get('email')?.touched;
  }
  public emailExiste(){
    return this.miForm.get('email')?.errors?.emailTomado
    && this.miForm.get('email')?.touched;
  }
  
  public enviarFormulario(): void {
    console.log(this.miForm.value);

    this.miForm.markAllAsTouched();
  }

}
