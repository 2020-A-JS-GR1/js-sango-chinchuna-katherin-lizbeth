import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeliculasService{

  url='http://localhost:1337';

  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(){
    return this._httpClient.get(this.url+'/Pelicula')
  }

  obtenerUnoPorId(idPelicula: number){
    return this._httpClient.get(this.url +'/Pelicula/'+idPelicula)
  }

  crear(pelicula){
    return this._httpClient.post(this.url + '/Pelicula',pelicula);
  }

  editar(pelicula, id){
    return this._httpClient.put(this.url + '/Pelicula/' + id, pelicula )
  }

  eliminar(idPelicula:number){
    return this._httpClient.delete(this.url +'/Pelicula/'+idPelicula);
  }
}
