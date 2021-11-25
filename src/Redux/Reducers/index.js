import { combineReducers } from "redux";
import DarkModeReducer from "./DarkModeReducer";
import MousePointeReducer from "./MousePointReducers";


const AllReducers = combineReducers({

    darkmode: DarkModeReducer,
    mousePointer: MousePointeReducer
})
export default AllReducers;