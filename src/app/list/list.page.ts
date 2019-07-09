import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  idUsuario : string = "";

  constructor(
    private router : Router,
    public menuC : MenuController,
    public fire : AngularFireAuth){
      //this.menuC.enable(false);


   
  }
  ngOnInit() {

    
      this.fire.authState.subscribe(obj=>{
        this.idUsuario = this.fire.auth.currentUser.uid;
        console.log(this.idUsuario); // pega o ID
        this.verificaClienteCadastro();
        //this.usuarioEmail = this.firebaseauth.auth.currentUser.email;
      });

  }

  proximo(){
    
  }

  anterior(){
    
  }

  verificaClienteCadastro(){
  
      let ref = this.firestore.collection('cliente').doc(this.idUsuario).get().then(doc => {

        if(!doc.exists){
          this.router.navigate(['/cadastro-de-cliente']);
          this.menuC.enable(false);
        }else{
        this.menuC.enable(true);
      }
        }).catch(err => {
          this.menuC.enable(false);
          this.router.navigate(['/cadastro-de-cliente']);
        })
    }
  

}
