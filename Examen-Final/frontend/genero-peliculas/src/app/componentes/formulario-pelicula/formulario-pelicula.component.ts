import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GenerosService} from "../../servicios/generos.service";
import {consoleTestResultHandler} from "tslint/lib/test";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  @Input()
  codigoInput: string;

  @Input()
  nombreInput: string;

  @Input()
  fechaInput: string;

  @Input()
  estrenadaInput: string;

  @Input()
  duracionInput: string;

  @Input()
  generoInput; //objeto de genero

  @Output()
  informacionPeliculaValidada: EventEmitter<any> = new EventEmitter<any>();

  model: NgbDateStruct;

  codigoModelo: string;
  nombreModelo: string;
  fechaModelo: string = '2018-12-02';
  estrenadaModelo: string;
  duracionModelo: string;
  generoModelo;

  arregloGeneros = [];

  constructor(
    private readonly _generoService: GenerosService
  ) { }

  ngOnInit(): void {

    const observableTraerTodos = this._generoService.traerTodos();

    observableTraerTodos
      .subscribe(
        (generos:any[]) => {
          this.arregloGeneros = generos;
        },
        (error) => {
          console.log('Error', error)
        }
      )

    if (this.codigoInput && this.nombreInput){
      this.codigoModelo = this.codigoInput;
      this.nombreModelo = this.nombreInput;
      this.fechaModelo = this.fechaInput;
      this.estrenadaModelo = this.estrenadaInput;
      this.duracionModelo = this.duracionInput;
      this.generoModelo = this.generoInput;
    }
  }

  crearPeliculas(formulario){
    const cod = this.codigoModelo;
    const duracion = this.duracionModelo;
    const codigoEsNumero = !Number.isNaN(Number(cod));
    let esNumero;
    if (duracion == undefined){
      esNumero = true;
    }else {
      esNumero = !Number.isNaN(Number(duracion));
    }

    if (codigoEsNumero && esNumero){
      //Llamar al servicio http y enviar un post al servidor con los datos al formulario
      console.log('OK :)');

      //mismos nombres entidad
      this.informacionPeliculaValidada.emit({
        codigo: this.codigoModelo,
        nombre: this.nombreModelo,
        fechaEstreno: this.fechaModelo,
        estrenada: this.estrenadaModelo,
        duracion: this.duracionModelo,
        genero: this.generoModelo
      })
    }else {
      console.log('NO ES UN NUMERO');
    }
  }

}
