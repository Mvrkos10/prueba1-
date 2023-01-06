import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-olvido-pass',
  templateUrl: './olvido-pass.page.html',
  styleUrls: ['./olvido-pass.page.scss'],
})
export class OlvidoPassPage{
  constructor(
    private alerta: AlertController
  ) { }


  async AlertaOlvido() {
    const alert = await this.alerta.create({
      message: 'Si los datos coinciden recibirás tu correo',
      buttons: ['Ok!'],
    });

    await alert.present();
  }
  }
