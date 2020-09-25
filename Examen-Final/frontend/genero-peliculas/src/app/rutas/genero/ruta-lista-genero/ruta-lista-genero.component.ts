import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GenerosService} from "../../../servicios/generos.service";

@Component({
  selector: 'app-ruta-lista-genero',
  templateUrl: './ruta-lista-genero.component.html',
  styleUrls: ['./ruta-lista-genero.component.css']
})
export class RutaListaGeneroComponent implements OnInit {

  arregloGeneros = [];
  busquedaModelo = '';

  constructor(
    private readonly _generoService: GenerosService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.filtrarArregloGeneros();
  }

  irAEditarGeneros(id: number){
    const ruta = ['/genero','editar',id];  //segmentos de la ruta
    // /genero/editar/1
    this._router.navigate(ruta);
  }

  eliminarGeneros(id: number){
    const obseliminar = this._generoService
      .eliminar(id);

    obseliminar
      .subscribe(
        ()=>{
          //borrando de la interfaz
          const indice = this.arregloGeneros
            .findIndex(u => u.id === id);
          this.arregloGeneros.splice(indice, 1);
        },
        (error) =>{
          console.error('Error', error);
        }
      )
  }

  filtrarArregloGeneros(){

    const consulta = {
      or: [
        {
          nombre: {
            contains: this.busquedaModelo
          }
        },
        {
          codigo: {
            contains: this.busquedaModelo
          }
        },
      ]
    }

    const stringConsultaGenero = 'where=' + JSON.stringify(consulta);

    const observableTraerTodos = this._generoService
      .traerTodos(this.busquedaModelo != '' ? stringConsultaGenero: '');

    observableTraerTodos
      .subscribe(
        (generos:any[]) => {
          this.arregloGeneros = generos;
        },
        (error) => {
          console.log('Error', error)
        }
      )
    this.busquedaModelo = ''
  }

}
