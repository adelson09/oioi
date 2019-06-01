import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Unidades } from '../model/unidades';

@Component({
  selector: 'app-lista-de-unidades',
  templateUrl: './lista-de-unidades.page.html',
  styleUrls: ['./lista-de-unidades.page.scss'],
})
export class ListaDeUnidadesPage implements OnInit {

  listaDeUnidades : Unidades[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};


  constructor(public router : Router,
              public loadingController: LoadingController) {
                
    }

  ngOnInit() {
    this.getList();
  }

  viewUnidades(obj : Unidades){
    this.router.navigate(['/unidades-view', {'unidades' : obj.id}]);
  }

  getList(){
    var ref = firebase.firestore().collection("unidades");
    ref.get().then(query=>{
      query.forEach(doc=>{
        let c = new Unidades();
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeUnidades.push(c);
      });
      console.log(this.listaDeUnidades);
    });
  }

  
  remove(obj : Unidades){
    var ref = firebase.firestore().collection("unidades");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeUnidades = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  }

}
