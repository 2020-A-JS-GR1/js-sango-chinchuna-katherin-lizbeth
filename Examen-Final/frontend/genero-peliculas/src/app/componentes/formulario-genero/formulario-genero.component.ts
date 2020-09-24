import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  @Input()
  codigoInput: string;

  @Input()
  nombreInput: string;

  @Input()
  descripcionInput: string;

  @Input()
  popularInput: string;

  @Input()
  anioInput: string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  codigoModelo: string;
  nombreModelo: string;
  descripcionModelo: string;
  popularModelo: string;
  anioModelo: string;

  constructor() { }

  ngOnInit(): void {
    if (this.codigoInput && this.nombreInput){ //significa que existe el genero
      this.codigoModelo = this.codigoInput;
      this.nombreModelo = this.nombreInput;
      this.descripcionModelo = this.descripcionInput;
      this.popularModelo = this.popularInput;
      this.anioModelo = this.anioInput;
    }
  }

  crearGenero(formulario){
    const codigo = this.codigoModelo;
    const anio = this.anioModelo;
    const codigoEsNumero = !Number.isNaN(Number(codigo));
    let esNumero;
    if (anio == undefined){
      esNumero = true;
    }else {
      esNumero = !Number.isNaN(Number(anio));
    }

    if (codigoEsNumero && esNumero){
      //Llamar al servicio http y enviar un post al servidor con los datos al formulario
      console.log('OK :)');
      this.informacionValidada.emit({
        codigo: this.codigoModelo,
        nombre: this.nombreModelo,
        descripcion: this.descripcionModelo,
        popular: this.popularModelo,
        anio: this.anioModelo
      })
    }else {
      console.log('NO ES UN NUMERO');
    }
  }

}
