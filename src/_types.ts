export type Todo = {
  text: string;
  completed: boolean;
};

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";

export type VisibilityFilter =
  | typeof SHOW_ALL
  | typeof SHOW_COMPLETED
  | typeof SHOW_ACTIVE;

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  payload: VisibilityFilter;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | SetVisibilityFilterAction;
