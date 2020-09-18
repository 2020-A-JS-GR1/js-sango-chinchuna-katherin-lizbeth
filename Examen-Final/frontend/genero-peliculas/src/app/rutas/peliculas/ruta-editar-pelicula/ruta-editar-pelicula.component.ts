import { Component, OnInit } from '@angular/core';
import {PeliculasService} from "../../../servicios/peliculas.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-pelicula',
  templateUrl: './ruta-editar-pelicula.component.html',
  styleUrls: ['./ruta-editar-pelicula.component.css']
})
export class RutaEditarPeliculaComponent implements OnInit {

  pelicula;

  constructor(
    private readonly _peliculaService: PeliculasService,
    private readonly _activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activateRoute.params; //retorna observable
    obsRuta
      .subscribe(
        (parametros: Params) => {
          const id =Number(parametros.id);

          const obsPelicula = this._peliculaService
            .obtenerUnoPorId(id);
          obsPelicula
            .subscribe((pelicula: any[]) => {
                this.pelicula = pelicula;
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

}
