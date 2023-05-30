import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo, todos } from '../interfaces/todos';

@Component({
  selector: 'todolist-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() todo: Todo;
  detailedTodo: Todo;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Got the JWT as: ', params['id']);
      this.detailedTodo = todos[parseInt(params['id']) - 1];
    });
  }
}
