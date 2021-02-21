import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuntenticadorJWTService {

  //jwtPorSesion: string;

  constructor() { }

  almacenaJWT(token: string) {
    //this.jwtPorSesion = token;
    localStorage.setItem("jwt", token);
  }

  recuperaJWT(): string {
    //return this.jwtPorSesion;
    return localStorage.getItem("jwt");
  }

  eliminaJWT() {
    //this.jwtPorSesion = null;
    localStorage.removeItem("jwt");
  }
}
