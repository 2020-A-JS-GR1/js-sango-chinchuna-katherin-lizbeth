import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent
  implements OnInit, OnDestroy {

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


  constructor() {
    console.log('Contructor')
  }

  ngOnInit(): void {
    console.log('INIT');
    //logica inicial del componente, como queremos que inicie el componente
  }

  ngOnDestroy(): void {
    //Desuscribimos de todas las suscripciones que tengamos
    console.log('Destroy')
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
