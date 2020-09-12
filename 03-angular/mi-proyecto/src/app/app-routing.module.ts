import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";

const routes: Routes = [
  {
    component: RutaInicioComponent, //componente que vamos a usar
    path: 'inicio' //URL a usar
  },
  {
    component: RutaLoginComponent, //componente que vamos a usar
    path: 'login' //URL a usar
  },
  {
    component: RutaUsuarioComponent, //componente que vamos a usar
    path: 'usuario', //URL a usar
    children:[
      {
        component: RutaListaUsuarioComponent,
        path: 'lista'
      },
      {
        component: RutaCrearUsuarioComponent,
        path: 'crear'
      },
      {
        component: RutaEditarUsuarioComponent,
        path: 'editar/:id'
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
