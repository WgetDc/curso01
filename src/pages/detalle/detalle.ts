import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListasService } from '../../services/service.listas';
@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  lista = {id:null, nombre:null, descripcion:null, img:null };
 id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private serviceListas : ListasService) {
    this.id = navParams.get('id');
    this.lista = serviceListas.getLista(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }



}
