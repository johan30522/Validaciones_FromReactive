import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  public persona={
    genero:'F',
    notificacion:true
  }
  constructor(private readonly formBuilder: FormBuilder) { }

  public miForm: FormGroup = this.formBuilder.group({
    genero: ['', [Validators.required]],
    notificacion: [false, [Validators.required]],
    condicion:[false,[Validators.required,Validators.requiredTrue]]
  });

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.miForm.patchValue(this.persona);


    //en caso de querer sincronizado el objeto persona con el form:
    // this.miForm.valueChanges.subscribe(
    //   ({condicion,...rest})=>{
     
    //     this.persona=rest;
    //   }
    // )


  }
public guardar(){
  const formvalue={...this.miForm.value};
  delete formvalue.condicion;

  this.persona=formvalue;
  console.log(formvalue);
}
}
