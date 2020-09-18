import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerosComponent } from './componentes/generos/generos.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import {HttpClientModule} from "@angular/common/http";
import {GenerosService} from "./servicios/generos.service";
import { RutaGeneroComponent } from './rutas/genero/ruta-genero/ruta-genero.component';
import { RutaCrearGeneroComponent } from './rutas/genero/ruta-crear-genero/ruta-crear-genero.component';
import { RutaEditarGeneroComponent } from './rutas/genero/ruta-editar-genero/ruta-editar-genero.component';
import { RutaListaGeneroComponent } from './rutas/genero/ruta-lista-genero/ruta-lista-genero.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaCrearPeliculaComponent } from './rutas/peliculas/ruta-crear-pelicula/ruta-crear-pelicula.component';
import { RutaEditarPeliculaComponent } from './rutas/peliculas/ruta-editar-pelicula/ruta-editar-pelicula.component';
import { RutaPeliculaComponent } from './rutas/peliculas/ruta-pelicula/ruta-pelicula.component';
import { RutaListaPeliculaComponent } from './rutas/peliculas/ruta-lista-pelicula/ruta-lista-pelicula.component';
import {PeliculasService} from "./servicios/peliculas.service";
import { FormularioGeneroComponent } from './componentes/formulario-genero/formulario-genero.component';
import { FormularioPeliculaComponent } from './componentes/formulario-pelicula/formulario-pelicula.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GenerosComponent,
    PeliculasComponent,
    RutaGeneroComponent,
    RutaCrearGeneroComponent,
    RutaEditarGeneroComponent,
    RutaListaGeneroComponent,
    RutaInicioComponent,
    RutaCrearPeliculaComponent,
    RutaEditarPeliculaComponent,
    RutaPeliculaComponent,
    RutaListaPeliculaComponent,
    FormularioGeneroComponent,
    FormularioPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GenerosService,
    PeliculasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
