import { combineReducers } from "redux";
import DarkModeReducer from "./DarkModeReducer";


const AllReducers = combineReducers({
    darkmode: DarkModeReducer,
})
export default AllReducers;