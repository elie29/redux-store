// Import everything from the store folder as it contains index.ts
import * as fromStrore from "./store";

import { renderTodos } from "./utils";

/**
 * Returns the first Element within the document
 * that matches the specified selector.
 */
const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const todoList = document.querySelector(".todos") as HTMLLIElement;

// create a store with an initial state
const store = new fromStrore.Store(
  {},
  {
    todos: [{ label: "Eat pizza", complete: false }]
  }
);

button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;

    const payload = { label: input.value, complete: false };

    store.dispatch({
      type: "ADD_TODO",
      payload
    });

    input.value = "";
  },
  false
);

todoList.addEventListener("click", function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    console.log(target);
  }
});
