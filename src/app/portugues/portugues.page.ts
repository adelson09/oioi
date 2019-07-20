import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portugues',
  templateUrl: './portugues.page.html',
  styleUrls: ['./portugues.page.scss'],
})
export class PortuguesPage implements OnInit {
  @ViewChild('textoBusca') textoBusca;

  

  constructor(public router: Router) { }
  ngOnInit() {
  }

  form(){
    window.open("https://accounts.google.com/ServiceLogin/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2F&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2F&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=AddSession",'_system', 'location=yes');
  }

  conotacao() {
    this.router.navigate(['conotacao']);
  }
}
