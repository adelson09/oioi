import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sociologia',
  templateUrl: './sociologia.page.html',
  styleUrls: ['./sociologia.page.scss'],
})
export class SociologiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  form8(){
    window.open("https://accounts.google.com/ServiceLogin/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2F&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2F&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=AddSession",'_system', 'location=yes');
  }
}
