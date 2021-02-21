import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { DatosJWT } from '../interfaces/datos-jwt';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private http: HttpClient) { }

  autenticaUsuario (usuario: string, clave: string) : Promise<DatosJWT> {
    var jsonObject = {
      usuario: usuario,
      clave: clave
    };

    return this.http.post<DatosJWT>('/usuario/auntentica', jsonObject).toPromise(); 
  }

  getUsuarioAutenticado(): Observable<Usuario> {
    return this.http.get<Usuario>('/usuario/getAutenticado');
  }
}
