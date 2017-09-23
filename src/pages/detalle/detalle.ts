import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListasService } from '../../services/service.listas';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  lista = {id:null, nombre:null, descripcion:null, img:null };
 id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private serviceListas : ListasService, public alertCtrl: AlertController) {
    this.id = navParams.get('id');
    this.lista = serviceListas.getLista(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  borrarLenguaje(){
    this.serviceListas.deleteLenguaje(this.lista);
    this.navCtrl.pop();
  }

   public estasSeguro(){ let confirm = this.alertCtrl.create({
      title: 'Alerta!!',
      message: '¿Esta seguro de que desea eliminar el lenguaje?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sí,Estoy seguro',
          handler: () => {
            this.borrarLenguaje();
          }
        }
      ]
    });
    confirm.present();
  }



}
