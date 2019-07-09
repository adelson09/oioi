import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },{
      title: 'Lista de Clientes',
      url: '/lista-de-clientes',
      icon: 'clipboard'
    },{
      title: 'Logoff',
      url: '/logoff',
      icon: 'exit'
    },{
      title: 'Cadastro de Cliente',
      url: '/cadastro-de-cliente',
      icon: 'person-add'
    },
    {
      title: 'Chat Room',
      url: '/chat-room',
      icon: 'chatboxes'
    },
    {
      title: 'Lista de Unidades',
      url: '/lista-de-unidade',
      icon: 'keypad'
    }
    ,{
      title: 'Cadastro de Perfil',
      url: '/cadastroperfil',
      icon: 'clipboard'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'list'
    },
    {
      title: 'Visualizar Perfil',
      url: '/perfil-view',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth : AngularFireAuth,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.firebaseauth.authState
    .subscribe(
      user => {
        if (!user) {
          
            this.router.navigate(['/home']);
          }
      },
      () => {
        //this.router.navigate(['/list']);
      }
    );

  }
}
