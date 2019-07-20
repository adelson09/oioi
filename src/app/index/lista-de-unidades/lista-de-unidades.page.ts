import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Unidades } from '../model/unidades';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-de-unidades',
  templateUrl: './lista-de-unidades.page.html',
  styleUrls: ['./lista-de-unidades.page.scss'],
})
export class ListaDeUnidadesPage {

  
  
  @ViewChild('textoBusca') textoBusca;

  unidades: Array<{nome: string}> = [];
  allUnidades: Array<{nome: string}> = [
    {nome:'SENAC - RUA BARCELOS DOMINGOS'},
    {nome:'FACULDADE SENAC - R. SANTA LUZIA, 735'},
    {nome:'COLÉGIO PEDRO II'},
    {nome:'CAMPUS DUQUE DE CAXIAS'},
    {nome:'CAMPUS ENGENHO NOVO I'},
    {nome:'IFRJ - INSTITUTO FEDERAL DO RIO DE JANEIRO'},
    {nome:'CAMPUS HUMAITÁ I'},
    {nome:'CEFET/RJ - CENTRO FEDERAL DE EDUCAÇÃO TECNOLÓGICA CELSO SUCKOW DA FONSECA'},
    {nome:'CAMPUS REALENGO I'},
    {nome:'CAMPUS TIJUCA I'},
    {nome:'UFRRJ - UNIVERSIDADE FEDERAL RURAL DO RIO DE JANEIRO'},
    {nome:'UNIRIO - UNIVERSIDADE FEDERAL DO ESTADO DO RIO DE JANEIRO'},
    {nome:'IFF - INSTITUTO FEDERAL FLUMINENSE'},
    {nome:'UNISUAM - CENTRO UNIVERSITÁRIO AUGUSTO MOTTA'},
    {nome:'UVA - UNIVERSIDADE VEIGA DE ALMEIDA'},
    {nome:'UNIFOA - CENTRO UNIVERSITÁRIO DE VOLTA REDONDA'}

  ];
  queryText: string;

constructor() { 
  this.queryText= "";

  let value =  {'nome':'SENAC - Rua Barcelos Domingos'}

}


  getUnidades() {

    this.unidades = [];

    this.allUnidades.forEach(uni=>{
      if (uni.nome.search(this.textoBusca.value) != -1) 
          this.unidades.push({'nome':uni.nome})
    })

  }
}
  
 


