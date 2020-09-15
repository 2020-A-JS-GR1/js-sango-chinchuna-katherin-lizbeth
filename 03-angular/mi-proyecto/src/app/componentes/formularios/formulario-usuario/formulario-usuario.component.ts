import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() { }

  ngOnInit(): void {
  }

  crearUsuario(formulario){
    const cedula = this.cedulaModelo;
    const esNumero = !Number.isNaN(Number(cedula));
    if (esNumero){
      //Llamar al servicio http y enviar un post al servidor con los datos al formulario
      console.log('LISTO :)');
    }else {
      console.log('NO ES UN NUMERO');
    }
  }
  ayuda(){
    alert('Ayuda')
  }
}
