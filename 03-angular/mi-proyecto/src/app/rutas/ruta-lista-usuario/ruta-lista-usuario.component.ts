import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = [];
  busquedaModelo = '';


  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.filtrarArreglo();
  }

  irAEditarUsuario(id: number){
    const ruta = ['/usuario','editar',id];  //segmentos de la ruta, el primero con / los demas no
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  eliminarUsuario(id: number){
    const obseliminar = this._usuarioService
      .eliminar(id);
    obseliminar
      .subscribe(
        ()=>{
          //borrando de la interfaz
          const indice = this.arregloUsuarios
            .findIndex(u => u.id === id);
          this.arregloUsuarios.splice(indice, 1);
        },
        (error) =>{
          console.error('Error', error);
        }
      )
  }

  filtrarArreglo(){
    const consulta = {
      or: [
        {
          nombre: {
            contains: this.busquedaModelo
          }
        },
        {
          cedula: {
            contains: this.busquedaModelo
          }
        },
      ]
    }

    const consultaString = 'where=' + JSON.stringify(consulta);

    const observableTraerTodos = this._usuarioService
      .traerTodos(this.busquedaModelo != '' ? consultaString: '');
    observableTraerTodos
      .subscribe(
        (usuarios:any[]) => {
          this.arregloUsuarios = usuarios;
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }
}
