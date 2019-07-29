import { addTodo, setVisibilityFilter, toggleTodo } from "./actions";
import { createStore, Store } from "redux";
import todoApp, { RootState } from "./reducer";
import { getVisibleTodos } from "./selectors";
import { TodoActionTypes, SHOW_COMPLETED, SHOW_ALL, SHOW_ACTIVE } from "./_types";

let store: Store<RootState, TodoActionTypes>;

describe("todo tests", () => {
  describe("when adding a todo", () => {
    const todoText = "some todo text";

    beforeEach(() => {
      store = createStore(todoApp);
      store.dispatch(addTodo(todoText));
    })

    it("should be added to the list", () => {
      let state = getVisibleTodos(store.getState());
      expect(state).toHaveLength(1);
      expect(state[0]).toHaveProperty("text", todoText);
    });

    it('should be marked as incomplete', () => {
      store.dispatch(setVisibilityFilter(SHOW_COMPLETED));
      let state = getVisibleTodos(store.getState());
      expect(state).toHaveLength(0);

      store.dispatch(setVisibilityFilter(SHOW_ALL));
      state = getVisibleTodos(store.getState());
      expect(state).toHaveLength(1);
    })
  });

  describe('when toggling a todo', () => {
    const todoText = "some todo text";

    beforeEach(() => {
      store = createStore(todoApp);
      store.dispatch(addTodo(todoText));
      store.dispatch(toggleTodo(0));
    })

    it('should be marked as complete', () => {
      store.dispatch(setVisibilityFilter(SHOW_COMPLETED));
      let state = getVisibleTodos(store.getState());
      expect(state).toHaveLength(1);

      store.dispatch(setVisibilityFilter(SHOW_ACTIVE));
      state = getVisibleTodos(store.getState());
      expect(state).toHaveLength(0);
    })
  })
});
