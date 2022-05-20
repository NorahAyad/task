import { createStore, combineReducers } from "redux";
import JobsReducer from "./jobs/reducer"
const reducers = combineReducers({  JobsReducer});
const store = createStore(reducers);

export default store;