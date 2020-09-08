import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaDetalleUsuarioComponent} from "./rutas/ruta-detalle-usuario/ruta-detalle-usuario.component";

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
