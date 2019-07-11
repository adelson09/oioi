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
  usuarioEmail:string;
  perfil: Perfil = new Perfil();
  picture: string = "../../assets/imgs/person.png";

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true }


  constructor(public firebaseauth: AngularFireAuth,
    public router: Router,
    public fire: AngularFireAuth) {

    this.firebaseauth.authState.subscribe(obj => {

      this.idUsuario = this.firebaseauth.auth.currentUser.uid;
      this.usuarioEmail = this.firebaseauth.auth.currentUser.email;

      this.downloadFoto();

      let ref = this.firestore.collection('cliente').doc(this.idUsuario)
      ref.get().then(doc => {
        this.perfil.id = doc.id;
        this.perfil.setDados(doc.data());
        console.log(this.perfil);

      }).catch(err => {
        console.log(err)
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

  cancelar() {
    this.fire.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      this.router.navigate(['/list']);
    })
  }

  edt() {
    this.router.navigate(['perfil-view']);
  }
}


