import { combineReducers } from "redux";
import { posts } from "./usersReducer";

const reducers = combineReducers({
    posts,
})

export default reducers;