import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  public persona={
    genero:'F',
    notificaciones:false
  }
  public terminos:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }




}
