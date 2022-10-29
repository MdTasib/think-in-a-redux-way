import { combineReducers } from "redux";
import todosRedicer from "./todos/reducer";
import filtersRedicer from "./filters/reducer";

const rootReducer = combineReducers({
	todos: todosRedicer,
	filters: filtersRedicer,
});

export default rootReducer;
