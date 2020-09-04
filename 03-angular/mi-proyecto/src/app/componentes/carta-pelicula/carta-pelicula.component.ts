import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  //inputs
  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true);
  }

  ejecutarEventoDioClicImagem(){
    this.eventoDioClicEnImagen.emit(true);
  }

}
