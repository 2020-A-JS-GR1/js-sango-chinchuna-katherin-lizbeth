import { Component, OnInit } from '@angular/core';
import {GenerosService} from "../../../servicios/generos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-genero',
  templateUrl: './ruta-crear-genero.component.html',
  styleUrls: ['./ruta-crear-genero.component.css']
})
export class RutaCrearGeneroComponent implements OnInit {

  constructor(
    private readonly _generoService: GenerosService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearGenero(genero){
    const obsCrearGenero = this._generoService.crear(genero);

    obsCrearGenero
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
