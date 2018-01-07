/**
 * Action namesapce for type purpose
 */
export const ADD_TODO = '[Todo] Add todo';
export const REMOVE_TODO = '[Todo] Delete todo';
export const GET_TODOS = '[Todo] Get todos';

/**
 * Action interface for Actions with type and payload data.
 */
export interface ActionInterface {
  readonly type: string;
  payload?: { label: string; complete: boolean };
}

export class AddTodo implements ActionInterface {
  readonly type = ADD_TODO;
  constructor(public payload) {}
}

export class RemoveTodo implements ActionInterface {
  readonly type = REMOVE_TODO;
  constructor(public payload) {}
}

export class GetTodos implements ActionInterface {
  readonly type = GET_TODOS;
}

export type TodoAction = AddTodo | RemoveTodo | GetTodos;
