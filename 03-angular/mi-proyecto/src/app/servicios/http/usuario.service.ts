
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UsuarioService{

  url='http://localhost:1337';

  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(consulta?: string){
    return this._httpClient.get(this.url+'/Usuario?' + consulta)
  }

  //obtener uno por id
  obtenerUnoPorId(idUsuario: number){
    return this._httpClient.get(this.url +'/Usuario/'+idUsuario)
  }

  crear(usuario){
    return this._httpClient.post(this.url + '/Usuario',usuario);
  }

  editar(usuario, id){
    return this._httpClient.put(this.url + '/Usuario/' + id, usuario )
  }

  eliminar(idUsuario:number){
    return this._httpClient.delete(this.url +'/Usuario/'+idUsuario);
  }
}
