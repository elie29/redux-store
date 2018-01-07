import { ADD_TODO, GET_TODOS, REMOVE_TODO, TodoAction } from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza', complete: false }] // default state but could be empty array
};

export function reducer(
  state = initialState, // in case state is null or undefined
  action: TodoAction
) {
  switch (action.type) {
    // use a block to accept const
    case ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data // same as data: data
      };
    }
    case REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      return { ...state, data };
    }
    case GET_TODOS: {
      /**
       * Make a deep copy of data as well not like
       * this [...state.data] because it is an array of object
       */
      const data = state.data.map(item => ({ ...item }));
      // Return a new state of all todos
      return { ...state, data };
    }
  }
  return state;
}
