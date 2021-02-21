import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  isLoading: Boolean = false;

  constructor(private alertController: AlertController, private loadingController: LoadingController) { }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async mostrarCargando() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 2000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => {});
        }
      });
    });
  }

  async ocultarCargando() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {});
  }
}
