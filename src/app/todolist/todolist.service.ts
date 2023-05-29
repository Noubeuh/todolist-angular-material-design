import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { todos, Todo } from './interfaces/todos';

@Injectable()
export class TodolistService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(todos);
  constructor() {}
}
