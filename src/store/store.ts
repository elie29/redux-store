export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  // console.log(store.value);
  get value() {
    return this.state;
  }

  subscribe(fn: Function) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    return () => {
      this.subscribers = this.subscribers.filter(item => item !== fn);
    };
  }

  dispatch(action): void {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  private notify() {
    // We send notification with the new state
    this.subscribers.forEach(fn => fn(this.value));
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      /**
       * aka -> newState["todos"] = this.reducers["todos"](state["todos"], action)
       * if state[prop] is undefined, reducers.reduce will use an initial state
       */
      newState[prop] = this.reducers[prop](state[prop], action);
    }

    return newState;
  }
}
