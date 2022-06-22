import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = 'http://localhost:8080/pwrfit/datos';
  constructor(private http: HttpClient) { }

  getDatos():Observable<any>{
    return this.http.get(this.url);
  }

  getUnDato(id:number):Observable<any>{
    return this.http.get(this.url+'/ver/'+id);
  }

  guardarDato(datos:Datos):Observable<any>{
    return this.http.post(this.url, datos);
  }

  editarDato(id:number, datos:Datos):Observable<any>{
    return this.http.put(this.url+'/', datos);
  }

  borrarDato(id:number):Observable<any>{
    return this.http.delete(this.url+'/borrar/'+id);
  }
}


export interface Datos {
  id:number;
  documento:string;
  edad:number;
  peso:number;
  altura:number;
  genero:string;
  imc:number;
}
