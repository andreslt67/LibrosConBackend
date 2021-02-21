import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Libro } from '../interfaces/libro';
import { Usuario } from '../interfaces/usuario';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioLibrosService } from '../servicios/servicio-libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.page.html',
  styleUrls: ['./lista-libros.page.scss'],
})
export class ListaLibrosPage implements OnInit {

  libros: Array<Libro>;
  usuarioAutenticado: Usuario;

  constructor(private servicioAlerta: AlertasService, private servicioLibros: ServicioLibrosService, private menuController: MenuController, 
    private servicioJwt: AuntenticadorJWTService, private navController: NavController) { 
    this.libros = new Array<Libro>();
  }

  openMenu() {
    this.menuController.toggle()
  }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros() {
    this.servicioAlerta.mostrarCargando();
    this.servicioLibros.getListadoLibros().subscribe(data => {
      this.servicioAlerta.ocultarCargando();
      if (data["result"] == "fail") {
        this.servicioAlerta.mostrarAlerta("Imposible obtener listado de libros");
      }
      else {
        data.libros.forEach(libro => this.libros.push(libro));
      }
    });
  }

  cerrarSesion() {
    this.servicioJwt.eliminaJWT();
    this.navController.navigateForward('/login');
  }

}
