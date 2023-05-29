import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { todos } from './interfaces/todos';

@Injectable()
export class TodolistService {
  todos$ = new BehaviorSubject(todos);
  constructor() {}
}
