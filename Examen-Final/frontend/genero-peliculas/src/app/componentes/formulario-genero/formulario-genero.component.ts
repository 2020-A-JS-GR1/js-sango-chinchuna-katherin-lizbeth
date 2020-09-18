import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  codigoModelo: string;
  nombreModelo: string;
  descripcionModelo: string;
  popularModelo: string;
  anioModelo: string;

  constructor() { }

  ngOnInit(): void {
  }

  crearGenero(formulario){
    const codigo = this.codigoModelo;
    const anio = this.anioModelo;
    const codigoEsNumero = !Number.isNaN(Number(codigo));
    let esNumero;
    if (anio == undefined){
      esNumero = true;
    }else {
      esNumero = !Number.isNaN(Number(anio));
    }

    if (codigoEsNumero && esNumero){

      //Llamar al servicio http y enviar un post al servidor con los datos al formulario

      console.log('OK :)');
    }else {
      console.log('NO ES UN NUMERO');
    }
  }

}
