import {Injectable} from '@Angular/core'; 

@Injectable()

export class ListasService {
        listas:any = [
            {id:1, nombre:"JavasScript", descripcion:"FrontEnd", img:"http://nodeframework.com/assets/img/js.png"},
            {id:2, nombre:"C#", descripcion:"Backend", img:"http://www.programmingapps.net/resources_progapps/uploads/2016/11/csharp7.png"},
            {id:3, nombre:"Phyton", descripcion:"Backend", img:"https://thumbsplus.tutsplus.com/uploads/users/48/posts/29072/preview_image/data-python-3%20(1).png?height=300&width=300"},
            {id:4, nombre:"Cobol0", descripcion:"lenguaje antiguo", img:"https://microteknologias.files.wordpress.com/2015/04/cobol-ii-x.jpg"}
  ];

  public getListas(){
     return this.listas;
  }

  public getLista(id){
    return this.listas.filter(function(e,i){
      return e.id == id }) [0] || {id:null, nombre:null, descripcion:null, img:null};
  }

  public addLenguaje(lenguaje){
    this.listas.push(lenguaje);
  }
}