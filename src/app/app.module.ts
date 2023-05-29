import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WithMaterialComponent } from './withmaterial/withmaterial.component';
import { PlainComponent } from './plain/plain.component';

const appRoutes: Routes = [
  { path: 'plain', component: PlainComponent },
  { path: 'material', component: WithMaterialComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
    }),
  ],
  declarations: [AppComponent, WithMaterialComponent, PlainComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
