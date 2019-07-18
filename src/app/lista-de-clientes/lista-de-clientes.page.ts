import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.page.html',
  styleUrls: ['./lista-de-clientes.page.scss'],
})
export class ListaDeClientesPage implements OnInit {

  listaDeClientes : Cliente[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  idUser;

  constructor(public rauter: Router,
    public router : Router,
              public loadingController: LoadingController,public firebaseauth : AngularFireAuth) {


                
    }

  ngOnInit() {
    this.firebaseauth.authState.subscribe(obj=>{
      this.idUser = this.firebaseauth.auth.currentUser.uid;
      this.getList();
      console.log(this.idUser);
    });
  }

  viewCliente(obj : Cliente){
    this.router.navigate(['/cliente-view', {'cliente' : obj.id}]);
  }

  getList(){
    var ref = firebase.firestore().collection("cliente");
    ref.get().then(query=>{
      query.forEach(doc=>{
        let c = new Cliente();

        if(doc.id!=this.idUser){
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeClientes.push(c);
      }

      });
      console.log(this.listaDeClientes);
    });
  }

   remove(obj : Cliente){
    var ref = firebase.firestore().collection("cliente");
    ref.doc(obj.id).delete()
      .then(()=>{
        this.listaDeClientes = [];
        this.getList();
      }).catch(()=>{
        console.log('Erro ao atualizar');
      })
  } 
  
  encaminhar(id : string) {






    this.rauter.navigate(['chat-room',{'id' : id}]);

  }

}
