import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilter,
  TodoActionTypes
} from "./_types";

export function addTodo(text: string): TodoActionTypes {
  return { type: ADD_TODO, payload: text };
}

export function toggleTodo(index: number): TodoActionTypes {
  return { type: TOGGLE_TODO, payload: index };
}

export function setVisibilityFilter(filter: VisibilityFilter): TodoActionTypes {
  return { type: SET_VISIBILITY_FILTER, payload: filter };
}
