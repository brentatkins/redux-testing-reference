import { createSelector } from "reselect";
import { RootState } from "./reducer";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "./_types";

const getVisibilityFilter = (state: RootState) => state.visibilityFilter;
const getTodos = (state: RootState) => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
    }
  }
);
