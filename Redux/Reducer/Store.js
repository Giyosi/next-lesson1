import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducers from "./rootReducer";

const middleware = [thunk];

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));

const dispatch = store.dispatch;
export { dispatch, store };