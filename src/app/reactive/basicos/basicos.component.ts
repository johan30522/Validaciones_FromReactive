import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // public miForm:FormGroup=new FormGroup({
  //   'nombre':new FormControl('RTX3090'),
  //   'precio':new FormControl(1500),
  //   'existencia':new FormControl(5)
  // }
  // );

  constructor(private readonly formBuilder:FormBuilder) { }


  
  public miForm:FormGroup=this.formBuilder.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    precio:['',[Validators.required,Validators.min(0)]],
    existencia:['',[Validators.required,Validators.min(0)]]
  })
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.miForm.reset({ //se puede usar en lugar de setValue, tambien se puede usar pachValue
      nombre:'rtx3090',
      precio:1500
    })
  }

  public campoEsValido(campo:string){
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  public guardar(){
    if(!this.miForm.valid){
      this.miForm.markAllAsTouched();
      return;
    }
    console.log('salvando');

    this.miForm.reset();
  }

}
