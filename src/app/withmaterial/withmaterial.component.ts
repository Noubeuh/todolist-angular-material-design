import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'with-material-app',
  templateUrl: './withmaterial.component.html',
  styleUrls: [ './withmaterial.component.css' ]
})
export class WithMaterialComponent implements OnInit  {
  interests = [];

  ngOnInit() {
    this.interests = [
      {value:'reading', viewValue:'Reading'},
      {value:'swimming', viewValue:'Swimming'},
      {value:'cycling', viewValue:'Cycling'}
    ];
  }

}