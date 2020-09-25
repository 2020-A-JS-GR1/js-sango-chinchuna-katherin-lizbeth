import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GenerosService{

  url='http://localhost:1337';

  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(consulta?:string){
    return this._httpClient.get(this.url+'/Genero?'+ consulta)
  }

  obtenerUnoPorId(idGenero: number){
    return this._httpClient.get(this.url +'/Genero/'+idGenero)
  }

  crear(genero){
    return this._httpClient.post(this.url + '/Genero',genero);
  }

  editar(genero, id){
    return this._httpClient.put(this.url + '/Genero/' + id, genero )
  }

  eliminar(idGenero:number){
    return this._httpClient.delete(this.url +'/Genero/'+idGenero);
  }
}
