import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('miForm') miForm!: NgForm;

  public persona: Persona =
    {
      nombre: 'johan',
      favorito: [
        { id: 1, nombre: 'mortal kombat' },
        { id: 2, nombre: 'killer intinct' }
      ]
    };

  public nuevoFavorito: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public guardar() {
    console.log(this.miForm?.controls.nombre.value);

    console.log('formulario posteado');
  }


  public nombreValido() {

    return this.miForm?.controls.nombre?.invalid && this.miForm?.controls.nombre?.touched
  }
  public eliminarFavorito(i: number) {
    console.log(i);
    this.persona.favorito.splice(i, 1);
  }
  public agregarFavorito() {
    console.log(this.nuevoFavorito);
    let nuevoFav: Favoritos = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoFavorito
    };

    this.persona.favorito.push({...nuevoFav});
    this.nuevoFavorito='';
  }
}
