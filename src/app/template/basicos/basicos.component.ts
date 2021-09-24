import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

public initForm={
  producto:'rtx3090',
  precio:10,
  existencia:10
}
  @ViewChild('miForm') miForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }


  public guardar() {

    console.log('guardando...');
    //console.log(this.miForm);

    this.miForm.resetForm({
      precio:0,
      existencia:0
    });
  }
  public nombreValido() {
    return this.miForm?.controls.producto?.invalid && this.miForm?.controls.producto?.touched
  }


  public precioValido() {
    return (this.miForm?.controls.precio?.value < 0 || this.miForm?.controls.precio?.value==='') && this.miForm?.controls.precio?.touched ;
  }
}
