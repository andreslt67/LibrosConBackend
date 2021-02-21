import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioUsuarioService } from '../servicios/servicio-usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  waiting: Boolean = false;
  loginForm: FormGroup;

  constructor(private sevicioUsuario: ServicioUsuarioService, private auntenticadorJWT: AuntenticadorJWTService,
    private servicioAlerta: AlertasService, private navControler: NavController) {
      this.loginForm = new FormGroup({
        usuario: new FormControl('', [Validators.required]),
        clave: new FormControl('', [Validators.required])
      })
    }

    autenticaUsuario() {
      this.waiting = true;
      this.sevicioUsuario.autenticaUsuario(this.loginForm.controls.usuario.value,
        this.loginForm.controls.clave.value).then(data => {
          this.waiting = false;
          if (data.jwt != undefined) {
            this.auntenticadorJWT.almacenaJWT(data.jwt);
            this.navControler.navigateForward('/lista-libros');
          }
          else {
            this.servicioAlerta.mostrarAlerta("Usuario y/o password incorrectos");
          }
        }).catch(error => { 
          this.waiting = false;
          this.servicioAlerta.mostrarAlerta('Error en acceso al servidor');
        });
  
  
    }

}
