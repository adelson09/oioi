import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Sender } from '../model/sender';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage {

  idSender : string;
  idUser : string;
  messages : Sender[] = [];


  constructor(public router: Router,public activatedRoute: ActivatedRoute,public firebaseauth : AngularFireAuth,){

    this.idSender = this.activatedRoute.snapshot.paramMap.get('id');
    

    this.firebaseauth.authState.subscribe(obj=>{
      this.idUser = this.firebaseauth.auth.currentUser.uid;
      this.carregarMensage();

    });

  }

  carregarMensage(){
    var ref = firebase.firestore().collection("message").where('para','==',this.idSender);
    ref.get().then(query=>{
      query.forEach(doc=>{
        let s = new Sender();
        s.setObjFirebase(doc.data());
        this.messages.push(s);
      });
      
    });
  }

  enviaMensagem(){

    firebase.firestore().collection("message").add(
      {'data' : '','mensagem' : 'oi','de' : this.idUser, 'para' : this.idSender}
    
    ).then(query=>{
    })
  }

/*
  iniciaConversa(){



    this.firebaseauth.authState.subscribe(obj=>{
      this.idUser = this.firebaseauth.auth.currentUser.uid;
      
      firebase.firestore().collection("mensagem").doc(this.idSender).set(this.empty).then(query=>{
      })

      firebase.firestore().collection("mensagem").doc(this.idUser).set(this.empty).then(query=>{
      })    

    });
  }

  enviaMensagem(){

    firebase.firestore().collection("message").add(
      {'data' : '','mensagem' : 'oi','de' : this.idUser, 'para' : this.idSender}
    
    ).then(query=>{
    })

    
    firebase.firestore().collection("mensagem").doc(this.idUser).collection(this.idSender).add({'mensagem' : 'oi'}).then(query=>{
    })
    firebase.firestore().collection("mensagem/").doc(this.idSender).collection(this.idUser).add({'mensagem' : 'oi'}).then(query=>{
    })
  }
*/

}