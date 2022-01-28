import thunk from "redux-thunk";
import { visitsReducer } from "./visitsReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  visitsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
