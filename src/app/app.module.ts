import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatCheckboxModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { TodolistService } from './todolist/todolist.service';

import { AppComponent } from './app.component';
import { DetailComponent } from './todolist/detail/detail.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  { path: 'home', component: TodolistComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TodolistService],
  declarations: [
    AppComponent,
    TopBarComponent,
    TodolistComponent,
    DetailComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
