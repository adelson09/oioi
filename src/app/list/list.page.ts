import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  [x: string]: any;
  
  ngOnInit() {



  }

  proximo(){
    this.slides.slideNext();
  }

  anterior(){
    this.slides.slidePrev();
  }


}
