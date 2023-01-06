import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  constructor(
    private alerta: AlertController
  ) { }


  async AlertaRegistro() {
    const alert = await this.alerta.create({
      message: 'Usuario Registrado!',
      buttons: ['Ok!'],
    });

    await alert.present();
  }
  }

