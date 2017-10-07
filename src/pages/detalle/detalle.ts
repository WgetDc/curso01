import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListasService } from '../../services/service.listas';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  image: string = null;
  lista = {id:null, nombre:null, descripcion:null, img:null };
  id = null;
  edit:any=false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private serviceListas : ListasService, public alertCtrl: AlertController,
  private camera: Camera) {
    this.id = navParams.get('id');
      serviceListas.getLista(this.id)
          .subscribe(lenguaje => {
            this.lista = lenguaje;
          });
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

  editar(){
    this.edit = true;
  }

  editarLenguaje(){
    this.serviceListas.editLenguaje(this.lista);
    this.navCtrl.pop();
  }

  undo(){
    this.edit = false;
  }

   getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      this.lista.img =  `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }



}
