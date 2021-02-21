import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoLibros } from '../interfaces/listado-libros';
import { AuntenticadorJWTService } from './auntenticador-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioLibrosService {

  constructor(private http: HttpClient, private serviciojwt: AuntenticadorJWTService) { }

  getListadoLibros(): Observable<ListadoLibros> {
    return this.http.get<ListadoLibros>('/libros')
  }
}
