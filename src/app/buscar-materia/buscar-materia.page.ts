import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar-materia',
  templateUrl: './buscar-materia.page.html',
  styleUrls: ['./buscar-materia.page.scss'],
})
export class BuscarMateriaPage  {

  constructor(public router: Router) { }


  ngOnInit() {
  }


  buscar() {
    this.router.navigate(['portugues']);
  }

  buscar1() {
    this.router.navigate(['artes']);
  }

  buscar2() {
    this.router.navigate(['ingles']);
  }

  buscar3() {
    this.router.navigate(['espanhol']);
  }

  buscar4() {
    this.router.navigate(['historia']);
  }

  buscar5() {
    this.router.navigate(['geografia']);
  }

  buscar6() {
    this.router.navigate(['biologia']);
  }

  buscar7() {
    this.router.navigate(['filosofia']);
  }

  buscar8() {
    this.router.navigate(['sociologia']);
  }

  buscar9() {
    this.router.navigate(['matematica']);
  }

  buscar10() {
    this.router.navigate(['fisica']);
  }

  buscar11() {
    this.router.navigate(['quimica']);
  }

}
