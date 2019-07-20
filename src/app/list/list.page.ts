import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';
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
  picture: string = "../../assets/imgs/person.png";

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
        this.downloadFoto();
        //this.usuarioEmail = this.firebaseauth.auth.currentUser.email;
      });

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

    caminhochat() {
      this.router.navigate(['index']);
    }
    
    downloadFoto() {
      let ref = firebase.storage().ref()
        .child(`perfil/${this.idUsuario}.jpg`);
  
      ref.getDownloadURL().then(url => {
        this.picture = url;
      })
    }



    slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay:true,
      speed: 1000,
     };
  

    slidesDidLoad(slides: IonSlides) {
      slides.startAutoplay();
    }



    slides = [
      {
        img:'../assets/slides/1.png',
        titulo:'Whey Protein Gold Standard',
      },
      {
        img:'../assets/slides/2.png',
        titulo:'Visivel',
      },
      {
        img:'../assets/slides/4.png',
        titulo:'Visivel',
      },
      {
        img:'../assets/slides/3.png',
        titulo:'Hi-Whey Protein',
      }]

  }
  



