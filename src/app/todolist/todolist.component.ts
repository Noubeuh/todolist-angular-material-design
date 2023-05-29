import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Todo, todos } from './interfaces/todos';
import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistComponent implements OnInit, OnChanges {
  todos$: Observable<Todo[]>;
  sortedTodos$: Observable<Todo[]>;

  constructor(private todolistService: TodolistService) {
    this.todos$ = todolistService.todos$;
  }

  ngOnInit() {
    //NB: better place for it maybe ?
    this.sortedTodos$ = this.todos$.pipe(
      filter((todos) =>
        todos.sort((a, b) => Number(a.isDone) - Number(b.isDone))
      )
    );
  }

  onCheckboxChange(e) {
    // EDIT : workaroud while onchanges not working
    this.todolistService.todos$.next(todos);
  }

  ngOnChanges(changes: SimpleChanges) {
    // EDIT : not working on stackbiltz, need to check it
    // console.log('todos => ', changes);
    // this.todolistService.todos$.next(todos);
  }
}
