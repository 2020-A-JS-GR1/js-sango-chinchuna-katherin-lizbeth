import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GenerosService{

  url='http://localhost:1337';

  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(){
    return this._httpClient.get(this.url+'/Genero')
  }

  obtenerUnoPorId(idGenero: number){
    return this._httpClient.get(this.url +'/Genero/'+idGenero)
  }

  crear(genero){
    return this._httpClient.post(this.url + '/Genero',genero);
  }

  eliminar(idGenero:number){
    return this._httpClient.delete(this.url +'/Genero/'+idGenero);
  }
}
