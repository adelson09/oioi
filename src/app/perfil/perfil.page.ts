import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Perfil } from '../model/perfil';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  idUsuario: string;
  perfil: Perfil = new Perfil();
  picture: string = "../../assets/imgs/person.png";

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true }


  constructor(public firebaseauth: AngularFireAuth,
    public router: Router,
    public fire: AngularFireAuth) {

   this.firebaseauth.authState.subscribe(obj=>{   

    this.idUsuario = this.firebaseauth.auth.currentUser.uid;

   this.downloadFoto();

    let ref = this.firestore.collection('perfil/').doc(this.idUsuario)
    ref.get().then(doc => {
      this.perfil.setDados(doc.data());
      console.log(this.perfil);

    });



  });
    }

  downloadFoto() {
        let ref = firebase.storage().ref()
          .child(`perfil/${this.idUsuario}.jpg`);

        ref.getDownloadURL().then(url => {
          this.picture = url;
        })
      }

}

