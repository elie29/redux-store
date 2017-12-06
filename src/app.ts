// Import everything from the store folder as it contains index.ts
import * as fromStore from './store';

import { renderTodos } from './utils';

/**
 * Returns the first Element within the document
 * that matches the specified selector.
 */
const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const reducers = {
  todos: fromStore.reducer // a reducer for todos
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

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const todo = JSON.parse(target.getAttribute('data-todo') as any);
    store.dispatch(new fromStore.RemoveTodo(todo));
  }
});

store.subscribe(state => console.log('STATE:::', state));
