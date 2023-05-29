export interface Todo {
  id: number;
  title: string;
  state: State;
  description?: string;
}

export enum State {
  TODO = 'To do',
  DONE = 'Done',
}

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Read the second TODO',
    state: State.DONE,
  },
  {
    id: 2,
    title: 'Read the third TODO',
    state: State.TODO,
  },
  {
    id: 3,
    title: 'Read again the first TODO',
    state: State.TODO,
  },
];
