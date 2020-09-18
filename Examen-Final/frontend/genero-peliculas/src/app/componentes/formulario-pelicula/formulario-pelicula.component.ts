import { Component, OnInit } from '@angular/core';
import {GenerosService} from "../../servicios/generos.service";

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  codigoModelo: string;
  nombreModelo: string;
  fechaModelo: string;
  estrenadaModelo: string;
  duracionModelo: string;
  generoModelo:string;

  arregloGeneros = [];

  constructor(
    private readonly _generoService: GenerosService
  ) { }

  ngOnInit(): void {
    const observableTraerTodos = this._generoService.traerTodos();

    observableTraerTodos
      .subscribe(
        (generos:any[]) => {
          this.arregloGeneros = generos;
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }

  crearPelicula(formulario){
    const cod = this.codigoModelo;
    const duracion = this.duracionModelo;
    const codigoEsNumero = !Number.isNaN(Number(cod));
    let esNumero;
    if (duracion == undefined){
      esNumero = true;
    }else {
      esNumero = !Number.isNaN(Number(duracion));
    }

    if (codigoEsNumero && esNumero){

      //Llamar al servicio http y enviar un post al servidor con los datos al formulario

      console.log('OK :)');
    }else {
      console.log('NO ES UN NUMERO');
    }
  }

}
