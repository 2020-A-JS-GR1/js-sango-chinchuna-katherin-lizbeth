import { Component, OnInit } from '@angular/core';
import {GenerosService} from "../../../servicios/generos.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-genero',
  templateUrl: './ruta-editar-genero.component.html',
  styleUrls: ['./ruta-editar-genero.component.css']
})
export class RutaEditarGeneroComponent implements OnInit {

  genero;
  mostrarFormularioGenero = false;

  constructor(
    private readonly _generoService: GenerosService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _router: Router
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
                this.llenarFormularioConDatosGenero();
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  llenarFormularioConDatosGenero(){
    this.mostrarFormularioGenero = true;
  }

  editarGenero(genero){
    const obsEditarGenero = this._generoService.editar(genero, this.genero.id);
    obsEditarGenero
      .subscribe(
        (datos)=>{
          const url = ['/genero','lista'];
          this._router.navigate(url);
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }
}
