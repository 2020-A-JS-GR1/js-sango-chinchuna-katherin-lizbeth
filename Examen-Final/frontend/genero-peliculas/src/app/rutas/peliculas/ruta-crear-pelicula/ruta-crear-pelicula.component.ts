import { Component, OnInit } from '@angular/core';
import {PeliculasService} from "../../../servicios/peliculas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-pelicula',
  templateUrl: './ruta-crear-pelicula.component.html',
  styleUrls: ['./ruta-crear-pelicula.component.css']
})
export class RutaCrearPeliculaComponent implements OnInit {

  constructor(
    private readonly _peliculaService: PeliculasService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearPelicula(pelicula){
    console.log(pelicula)
    const obsCrearPelicula = this._peliculaService.crear(pelicula)
    obsCrearPelicula
      .subscribe(
        (datos)=>{
          const url = ['/pelicula','lista'];
          this._router.navigate(url);
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
