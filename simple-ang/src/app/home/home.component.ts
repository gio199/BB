import { Component, OnInit } from '@angular/core';


@Component({  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = 'Baba Cool';

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

}