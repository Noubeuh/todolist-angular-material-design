import { Component, OnInit } from '@angular/core';

import { todos, Todo } from './interfaces/todos';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  private todolist: Todo[];

  constructor() {}

  ngOnInit() {
    this.todolist = [...todos];
  }
}
