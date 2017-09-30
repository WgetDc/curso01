import {Injectable} from '@Angular/core'; 
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()


export class ListasService {

  constructor(public afDB: AngularFireDatabase){

}
        listas:any = [
            {id:1, nombre:"JavasScript", descripcion:"FrontEnd", img:"http://nodeframework.com/assets/img/js.png"},
            {id:2, nombre:"C#", descripcion:"Backend", img:"http://www.programmingapps.net/resources_progapps/uploads/2016/11/csharp7.png"},
            {id:3, nombre:"Phyton", descripcion:"Backend", img:"https://thumbsplus.tutsplus.com/uploads/users/48/posts/29072/preview_image/data-python-3%20(1).png?height=300&width=300"},
            {id:4, nombre:"Cobol0", descripcion:"lenguaje antiguo", img:"https://microteknologias.files.wordpress.com/2015/04/cobol-ii-x.jpg"}
  ];

  public getListas(){
    return this.afDB.list('curso01/');
     //return this.listas;
  }

  public getLista(id){
    return this.afDB.object('curso01/'+id);
   /* return this.listas.filter(function(e,i){
      return e.id == id }) [0] || {id:null, nombre:null, descripcion:null, img:null};
  */  
}

  public addlenguaje(lista){
    this.afDB.database.ref('curso01/'+lista.id).set(lista);
    //this.listas.push(lista);
  }
  
  public deleteLenguaje(lista){
    this.afDB.database.ref('curso01/'+lista.id).remove();
    /* let index = this.listas.indexOf(lista);
    this.listas.splice(index,1);     */    
   // for (let i = 0 ; i < this.listas.lenght; i++){
    //  if(this.listas[i].id == lista[i].id){
    //    this.listas.splice(i,1);
   //   }
   // }
  }

 editLenguaje(lista){
   this.afDB.database.ref('curso01/'+lista.id).set(lista);
 /*  let index = this.listas.indexOf(lista);
   this.listas[index] = lista; */
 }

  
}