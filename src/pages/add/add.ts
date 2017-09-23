import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListasService} from '../../services/service.listas';


/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  lista = {id:null, nombre:null, descripcion:null, img:null };
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listaService: ListasService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  cerrarPage(){
    this.navCtrl.pop();
  }

  crearLenguaje(){
    this.id = Date.now();
    this.listaService.addLenguaje(this.lista);
    this.navCtrl.pop();
  }

}
