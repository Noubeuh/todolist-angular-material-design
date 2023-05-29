export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
  description?: string;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Read the second TODO',
    isDone: true,
  },
  {
    id: 2,
    title: 'Read the third TODO',
    isDone: false,
  },
  {
    id: 3,
    title: 'Read again the first TODO',
    isDone: false,
  },
];
