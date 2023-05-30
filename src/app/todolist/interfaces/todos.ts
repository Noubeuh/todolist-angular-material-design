export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
  description?: string;
  collapsed?: boolean;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: 'List my TODOs',
    isDone: true,
    description: 'As a user I would like to list my current todos',
    collapsed: true,
  },
  {
    id: 2,
    title: 'Change a TODO state',
    isDone: true,
    description:
      'As a user I would like to change a todo state by checking a "box"',
    collapsed: true,
  },
  {
    id: 3,
    title: 'Detail a TODO',
    isDone: true,
    description:
      'As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view).',
    collapsed: true,
  },
  {
    id: 4,
    title: 'Add a new TODO',
    isDone: false,
    description: 'As a user I would like to add a new todo in my list',
    collapsed: true,
  },
];
