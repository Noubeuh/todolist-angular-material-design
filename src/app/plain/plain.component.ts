import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'plain-component-app',
  templateUrl: './plain.component.html',
  styleUrls: [ './plain.component.css' ]
})
export class PlainComponent implements OnInit {
  interests = [];

  ngOnInit() {
    this.interests = [
      {value:'reading', viewValue:'Reading'},
      {value:'swimming', viewValue:'Swimming'},
      {value:'cycling', viewValue:'Cycling'}
    ];
  }
}