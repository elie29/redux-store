export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  // console.log(store.value);
  get value() {
    return this.state;
  }

  dispatch(action): void {
    this.state = {
      ...this.state, // merge current state
      todos: [...this.state.todos, action.payload] // concat the new todo with todos
    };
    console.log(this.state);
  }
}
