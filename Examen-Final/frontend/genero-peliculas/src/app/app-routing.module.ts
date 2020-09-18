import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaGeneroComponent} from "./rutas/genero/ruta-genero/ruta-genero.component";
import {RutaListaGeneroComponent} from "./rutas/genero/ruta-lista-genero/ruta-lista-genero.component";
import {RutaEditarGeneroComponent} from "./rutas/genero/ruta-editar-genero/ruta-editar-genero.component";
import {RutaCrearGeneroComponent} from "./rutas/genero/ruta-crear-genero/ruta-crear-genero.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaPeliculaComponent} from "./rutas/peliculas/ruta-pelicula/ruta-pelicula.component";
import {RutaListaPeliculaComponent} from "./rutas/peliculas/ruta-lista-pelicula/ruta-lista-pelicula.component";
import {RutaEditarPeliculaComponent} from "./rutas/peliculas/ruta-editar-pelicula/ruta-editar-pelicula.component";
import {RutaCrearPeliculaComponent} from "./rutas/peliculas/ruta-crear-pelicula/ruta-crear-pelicula.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path: 'inicio',
  },
  {
    component: RutaGeneroComponent, //componente que vamos a usar
    path: 'genero', //URL a usar
    children: [
      {
        component: RutaListaGeneroComponent,
        path: 'lista'
      },
      {
        component: RutaEditarGeneroComponent,
        path: 'editar/:id'
      },
      {
        component: RutaCrearGeneroComponent,
        path: 'crear'
      },
      {
        path:'',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    component: RutaPeliculaComponent, //componente que vamos a usar
    path: 'pelicula', //URL a usar
    children: [
      {
        component: RutaListaPeliculaComponent,
        path: 'lista'
      },
      {
        component: RutaEditarPeliculaComponent,
        path: 'editar/:id'
      },
      {
        component: RutaCrearPeliculaComponent,
        path: 'crear'
      },
      {
        path:'',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
