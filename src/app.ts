// Import everything from the store folder as it contains index.ts
import * as fromStore from './store';

import { renderTodos, span, todoList } from './utils';

/**
 * Returns the first Element within the document
 * that matches the specified selector.
 */
const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const refresh = document.querySelector('.refresh') as HTMLButtonElement;

const reducers = {
  todos: fromStore.reducer // a reducer for todos
  // it could have another reducer for other stuff
};

// create a store with an initial state
const store = new fromStore.Store(reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddTodo(todo));

    input.value = '';
  },
  false
);

const subscription = store.subscribe(state => renderTodos(state.todos.data));
destroy.addEventListener('click', subscription, false);

todoList.addEventListener('click', event => {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const todo = JSON.parse(target.getAttribute('data-todo') as string);
    store.dispatch(new fromStore.RemoveTodo(todo));
  }
});

refresh.addEventListener('click', event => {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    todoList.innerHTML = '';
    span.innerHTML = '0';
    // Emulate call wait
    setTimeout(() => store.dispatch(new fromStore.GetTodos()), 1000);
  }
});

store.subscribe(state => console.log('STATE:::', state));
