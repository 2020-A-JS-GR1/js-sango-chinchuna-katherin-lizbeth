import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";

@Component({
  selector: 'aplicacion-nueva', //app-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true;

  arregloNumeros=[1,2,3];
  arregloPeliculas = [
    {
      id: 1,
      url: 'https://images-na.ssl-images-amazon.com/images/I/81Jxz3ssO9L._SX342_.jpg',
      descripcion: 'Pelicula de aventura y ciencia ficcion.',
      nombrePelicula: 'Black Panther'
    },
    {
      id: 2,
      url: 'https://es.web.img3.acsta.net/r_1280_720/pictures/16/09/30/15/12/066006.jpg',
      descripcion: 'Pelicula de ciencia ficcion.',
      nombrePelicula: 'Doctor strange'
    },
    {
      id: 3,
      url: 'https://es.web.img2.acsta.net/pictures/19/10/21/18/17/2984901.jpg',
      descripcion: 'Pelicula de fantasia para todo publico.',
      nombrePelicula: 'Las aventuras del Doctor Dolittle'
    }
  ]
  arregloUsuarios = [];
  arregloObserables = [];

  //Inyectar dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {

  }

  ngOnInit() {
    this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean){
    console.log('Llego el evento',objeto);

    const observableTraerTodos = this._usuarioService.traerTodos();
    const suscripcion = observableTraerTodos
      .subscribe(
        (data) =>{ //THEN - TRY
          console.log(data);
          this.arregloUsuarios = data as any [];
        },
        (error) =>{ //CATCH
          console.log(error);
        }
      )
    this.arregloObserables.push(suscripcion);
  }

  crearUsuario(){
    const usuarioNuevo = {
      cedula: "1751235251",
      nombre: "Mariana",
      apellido: "Cardenas"
    }

    const obsCrearUsuario = this._usuarioService.crear(usuarioNuevo);
    const suscripcion = obsCrearUsuario
      .subscribe(
        (datos) => {
          console.log('Nuevo Usuario', datos);
          this.mensajeConsola(true); //volvemos a llamar a las funciones para que se vuelvan a cargar los datos
        },
        (error) => {
          console.error('Error', error);
        }
      )
    this.arregloObserables.push(suscripcion);

  }
}

/* En el oneDestroy quedaria asi
 this.arregloObserables.forEach(
      (suscripcion) => {
        suscripcion.unsubscribe();
      }
    )
* */
