import { Component, OnInit } from '@angular/core';
import {PeliculasService} from "../../../servicios/peliculas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-pelicula',
  templateUrl: './ruta-lista-pelicula.component.html',
  styleUrls: ['./ruta-lista-pelicula.component.css']
})
export class RutaListaPeliculaComponent implements OnInit {

  arregloPeliculas = [];

  constructor(
    private readonly _peliculaService:PeliculasService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const observableTraerTodos = this._peliculaService.traerTodos();

    observableTraerTodos
      .subscribe(
        (peliculas:any[]) => {
          this.arregloPeliculas = peliculas;
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }

  irAEditarPeliculas(id: number){
    const ruta = ['/pelicula','editar',id];  //segmentos de la ruta
    // /pelicula/editar/1
    this._router.navigate(ruta);
  }

  eliminarPeliculas(id: number){
    const obseliminar = this._peliculaService
      .eliminar(id);

    obseliminar
      .subscribe(
        ()=>{
          //borrando de la interfaz
          const indice = this.arregloPeliculas
            .findIndex(u => u.id === id);
          this.arregloPeliculas.splice(indice, 1);
        },
        (error) =>{
          console.error('Error', error);
        }
      )
  }
}
