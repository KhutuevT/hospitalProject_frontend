import { applyMiddleware, createStore } from "redux";
import { visitsReducer } from "./visitsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  visitsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
