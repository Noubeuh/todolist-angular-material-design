import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Todo, todos } from './interfaces/todos';
import { TodolistService } from './todolist.service';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: '200px', visibility: 'visible' })),
      state('true', style({ height: '0px', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistComponent implements OnInit {
  sortedTodos$: Observable<Todo[]>;
  selectedTodo: Todo;

  constructor(private todolistService: TodolistService) {
    this.sortedTodos$ = todolistService.todos$;
  }

  ngOnInit() {
    //NB: could be in constructor. Kind of situation i would discuss with the leaddev.
    this.sortedTodos$ = this.sortedTodos$.pipe(
      filter((todos) =>
        todos.sort((a, b) => Number(a.isDone) - Number(b.isDone))
      )
    );
  }

  onCheckboxChange(e) {
    // EDIT : workaroud while onchanges not working
    this.todolistService.todos$.next(todos);
  }

  seeTodoDetail(todo: Todo) {
    this.selectedTodo = todo;
    this.selectedTodo.collapsed = !this.selectedTodo.collapsed;
  }
}
