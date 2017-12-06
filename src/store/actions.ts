export const ADD_TODO = '[Todo] Add todo';
export const REMOVE_TODO = '[Todo] Delete todo';

export interface ActionInterface {
  readonly type: string;
  payload: any;
}

export class AddTodo implements ActionInterface {
  readonly type = ADD_TODO;
  constructor(public payload: {}) {}
}

export class RemoveTodo implements ActionInterface {
  readonly type = REMOVE_TODO;
  constructor(public payload: {}) {}
}
