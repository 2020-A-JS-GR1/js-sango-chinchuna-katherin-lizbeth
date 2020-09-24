import { Component, OnInit } from '@angular/core';
import {PeliculasService} from "../../../servicios/peliculas.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-pelicula',
  templateUrl: './ruta-editar-pelicula.component.html',
  styleUrls: ['./ruta-editar-pelicula.component.css']
})
export class RutaEditarPeliculaComponent implements OnInit {

  pelicula;
  mostrarFormularioPelicula = false;

  constructor(
    private readonly _peliculaService: PeliculasService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _router: Router
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
                this.llenarFormularioPeliculaConDatos();
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  llenarFormularioPeliculaConDatos(){
    this.mostrarFormularioPelicula = true;
    this.pelicula.fechaEstreno = String(this.pelicula.fechaEstreno.substr(0,10))
    //console.log(this.pelicula)
  }

  editarPelicula(pelicula){
    const obsEditarPelicula = this._peliculaService.editar(pelicula, this.pelicula.id);
    console.log(pelicula) //pelicula no esta agarrando genero
    obsEditarPelicula
      .subscribe(
        (datos)=>{
          const url = ['/pelicula','lista'];
          this._router.navigate(url);
        },
        (error)=>{
          console.error('Error',error);
        }
      )
  }

}
