import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListasService } from '../../services/service.listas';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myNav') nav: NavController
  listas:any = [];

  constructor(public navCtrl: NavController, private serviceListas : ListasService) {
   this.listas = this.serviceListas.getListas();
  }

  public goToPageDetalle(id){
    this.navCtrl.push(DetallePage, {id:id});
  }

  goToPageCrear(){
    this.navCtrl.push("CrearPage");
  }

}
