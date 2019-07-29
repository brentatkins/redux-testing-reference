import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilter,
  TodoActionTypes,
  Todo,
  SHOW_ALL
} from "./_types";

export type TodosState = Todo[]
export type VisibilityFilterState = VisibilityFilter

function visibilityFilter(
  state: VisibilityFilterState = SHOW_ALL,
  action: TodoActionTypes
) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}

function todos(state: TodosState = [], action: TodoActionTypes) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
export type RootState = ReturnType<typeof todoApp>
