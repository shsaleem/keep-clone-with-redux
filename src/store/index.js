import { createStore } from "redux";
import keepReducer from "./reducer";

function saveToLocalStorage(state) {
  try {
    localStorage.setItem("notes", JSON.stringify(state));
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    if (localStorage.getItem("notes") === null) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem("notes"));
  } catch (e) {
    console.warn(e);
  }
}

const store = createStore(
  keepReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
