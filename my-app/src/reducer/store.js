import { createStore, combineReducers } from "redux";
import JobsReducer from "./jobs/reducer"
import loginDetails from "./Login/reducer"
const reducers = combineReducers({ loginDetails, JobsReducer});
const store = createStore(reducers);

export default store;