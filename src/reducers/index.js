import counterReducer from "../reducers/counter";
import loggedReducer from "../reducers/isLoggedIn";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
