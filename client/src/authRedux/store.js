import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
