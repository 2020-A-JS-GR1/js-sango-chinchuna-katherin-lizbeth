import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  //inputs
  @Input()
  urlImage: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  textoEjemplo = 'Katherin';
  urlEjemploImagen = 'https://images-na.ssl-images-amazon.com/images/I/81Jxz3ssO9L._SX342_.jpg';
  linkTextoEjemplo = '';

  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion(){
    alert('Hola!');
  }

  eventOnBlur(){
    console.log('Blur');
  }

}
