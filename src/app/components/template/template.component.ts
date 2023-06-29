import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
      .ng-dirty.ng-touched:not(form) {
        border: 2px solid red;
      }

      .required {
        border: 3px solid yellow;
      }
    `,
  ],
})
export class TemplateComponent {
  usuario: persona = {
    nombre: 'Julian',
    apellido: 'Lopez',
    correo: 'hhahhaah@gmail.com',
    pais: 'CRM',
    sexo:''
  };

  paises = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica',
    },
    {
      codigo: 'CRI',
      nombre: 'España',
    },
  ];

  sexos:String[]=["Hombre","Mujer"]

  constructor() {}
  //traer informacion de campos ngForm//
  guardar(forma: NgForm) {
    console.log('ngForm', forma);
    console.log('Valor', forma.value);

    console.log('Usuario', this.usuario);
  }
}

interface persona {
  nombre: string;
  apellido: string;
  correo: string;
  pais: string;
  sexo:string;
}
