import { ActionInterface, ADD_TODO, REMOVE_TODO, TodoAction } from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza', complete: false }]
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
      return {
        ...state,
        data: data
      };
    }
  }
  return state;
}
