import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";

// debugger;
const EntitiesReducer = combineReducers({
  users: UsersReducer
});

export default EntitiesReducer;