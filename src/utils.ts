export const span = document.querySelector('span') as HTMLSpanElement;
export const todoList = document.querySelector('.todos') as HTMLLIElement;

export function renderTodos(collection) {
  span.innerHTML = collection.length;
  let data = '';
  for (const item of collection) {
    data += `
    	<li>
	      ${item.label}
        <button type="button" data-todo='${JSON.stringify(item)}'>
          Delete
        </button>
      </li>
     `;
  }
  todoList.innerHTML = data;
}
