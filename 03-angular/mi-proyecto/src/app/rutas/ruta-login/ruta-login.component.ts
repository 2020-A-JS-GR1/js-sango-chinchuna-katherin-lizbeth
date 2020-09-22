import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  correoModelo: string;
  cedulaModelo: string;

  constructor() { }

  ngOnInit(): void {
  }

  revisarLogin(formulario){

  }

}
