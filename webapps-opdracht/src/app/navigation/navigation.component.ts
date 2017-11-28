import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title1: string;
  title2: string;
  title3: string;
  title4: string;


  constructor() {
    this.title1 = 'Gallery';
    this.title2 = 'Gallery2';
    this.title3 = 'Gallery3';
    this.title4 = 'Gallery4';
   }

  ngOnInit() {
  }

}
