import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router) {

  }
  showPlainPage() {
    this.router.navigate(['plain']);
  }

  showMaterialPage() {
    this.router.navigate(['material']);
  }
}
