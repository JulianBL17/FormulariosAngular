import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent {


  forma:FormGroup;

  

  usuario:any={
    nombreCompleto:{
      nombre:"Fernando",
      apellido:"herrera"
    },
    correo:"Herrara@gmail.com"
  }

  constructor(){

    console.log(this.usuario);
    

    this.forma=new FormGroup({

     
'nombreCompleto':new FormGroup( {
'nombre':new FormControl('',[
    Validators.required,
    Validators.minLength(4)
  ]),

'apellido':new FormControl('',[
  Validators.required,
  Validators.maxLength(5)]),

}),

      'correo':new FormControl('',[
                                  Validators.required,
                                  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
   
     })

     this.forma.setValue(this.usuario);

  }

  guardarCambios(forma:FormGroup){
      console.log(this.forma.value);
      console.log(this.forma);
      
  }



  

  

}