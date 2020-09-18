import { Component, OnInit } from '@angular/core';
import {GenerosService} from "../../../servicios/generos.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-genero',
  templateUrl: './ruta-editar-genero.component.html',
  styleUrls: ['./ruta-editar-genero.component.css']
})
export class RutaEditarGeneroComponent implements OnInit {

  genero;

  constructor(
    private readonly _generoService: GenerosService,
    private readonly _activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activateRoute.params; //retorna observable
    obsRuta
      .subscribe(
        (parametros: Params) => {
          const id =Number(parametros.id);
          const obsGenero = this._generoService
            .obtenerUnoPorId(id);
          obsGenero
            .subscribe((genero: any[]) => {
                this.genero = genero;
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

}
