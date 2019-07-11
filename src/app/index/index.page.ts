import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  
  idUsuario: string;
  picture: string = "../../assets/imgs/person.png";

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true }


  constructor(public firebaseauth: AngularFireAuth,
    public router: Router,
    public fire: AngularFireAuth) { 

  this.firebaseauth.authState.subscribe(obj => {

    this.idUsuario = this.firebaseauth.auth.currentUser.uid;
    
  })}
 

  ngOnInit() {
    this.downloadFoto();
  }
 

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`perfil/${this.idUsuario}.jpg`);

    ref.getDownloadURL().then(url => {
      this.picture = url;
    })
  }
}
