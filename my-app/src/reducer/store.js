import { createStore, combineReducers } from "redux";
import JobsReducer from "./jobs/reducer"
import loginDetails from "./Login/reducer"
import statusList from "./status/reducer"
const reducers = combineReducers({statusList, loginDetails, JobsReducer});
const store = createStore(reducers);

export default store;