import { Component, OnInit } from '@angular/core';
import { TemplateModule } from '../../template/template.module';

interface MenuItem{
  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles:[
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class SidemenuComponent implements OnInit {

public templateMenu:MenuItem[]=[
{
  texto:'Basicos',
  ruta:'./template/basicos'
},
{
  texto:'Dinamicos',
  ruta:'./template/dinamicos'
},
{
  texto:'Switches',
  ruta:'./template/switches'
}

];

public reactiveMenu:MenuItem[]=[
  {
    texto:'Basicos',
    ruta:'./reactive/basicos'
  },
  {
    texto:'Dinamicos',
    ruta:'./reactive/dinamicos'
  },
  {
    texto:'Switches',
    ruta:'./reactive/switches'
  }
  
  ];

  public authMenu:MenuItem[]=[
    {
      texto:'login',
      ruta:'./auth/login'
    },
    {
      texto:'register',
      ruta:'./auth/register'
    }
    
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
