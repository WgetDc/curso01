import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListasService} from '../../services/service.listas';

/**
 * Generated class for the CrearPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {

  lista = {id:null, nombre:null, descripcion:null, img:null };
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public servicioListas : ListasService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }

  crearLenguaje(){
    this.lista.id= Date.now();
    this.servicioListas.addlenguaje(this.lista);
    this.navCtrl.pop();
  }

}
