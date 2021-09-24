import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
interface Persona {
  nombre: string;
  favorito: Favoritos[]
}
interface Favoritos {
  id: number;
  nombre: string
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  public persona: Persona =
    {
      nombre: 'johan',
      favorito: [
        { id: 1, nombre: 'mortal kombat' },
        { id: 2, nombre: 'killer intinct' }
      ]
    };


  public miForm: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(
      [
        ['metal gear', Validators.required],
        ['death stranding', Validators.required]
      ], Validators.required)
  });

  public nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);


  get favoritosArreglo() {
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.initForm();
  }

  private initForm() {
    this.miForm.reset({ //se puede usar en lugar de setValue, tambien se puede usar pachValue
      nombre: 'rtx3090'
    })
  }

  public campoEsValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched;
  }

  public guardar() {
    if (!this.miForm.valid) {
      this.miForm.markAllAsTouched();
      return;
    }
    console.log('salvando');

    this.miForm.reset();
  }
  public agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    //this.favoritosArreglo.push(new FormControl(this.nuevoFavorito.value, Validators.required)
    this.favoritosArreglo.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
  public eliminarFavorito(indice: number) {
    console.log(indice);
    this.favoritosArreglo.removeAt(indice);
  }

}
