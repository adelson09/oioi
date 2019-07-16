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
  input;

  constructor(public router: Router,public activatedRoute: ActivatedRoute,public firebaseauth : AngularFireAuth,){

    

    this.idSender = this.activatedRoute.snapshot.paramMap.get('id');
    

    this.firebaseauth.authState.subscribe(obj=>{
      this.idUser = this.firebaseauth.auth.currentUser.uid;
      this.carregarMensage();
      console.log(this.idSender);
      console.log(this.idUser);
    });

  }

  carregarMensage(){
    var ref = firebase.firestore().collection("cliente").doc(this.idUser).collection("mensagem")
    ref.onSnapshot(query=>{
      query.docChanges().forEach(doc => {
        let s = new Sender();
        s.setObjFirebase(doc.doc.data());
        this.messages.push(s);
        console.log(doc.doc.data().mensagem)
      });
      
    });
  }

  enviaMensagem(){

   

    firebase.firestore().collection("cliente").doc(this.idUser).collection('mensagem').add(
      {'data' : '','mensagem' : this.input,'de' : this.idUser, 'para' : this.idSender}
    
    ).then(query=>{
    })

    firebase.firestore().collection("cliente").doc(this.idSender).collection('mensagem').add(
      {'data' : '','mensagem' : this.input,'de' : this.idUser, 'para' : this.idSender}
    
    ).then(query=>{
    })

    this.input = "";
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

*ngIf="msg.from == friend.username && msg.to == 'me' "

*ngIf="msg.from == 'me' && msg.to == friend.username"

img class="friend-img" [src]="Util.pathAvatar(friend.avatar)" alt="">*/
}
