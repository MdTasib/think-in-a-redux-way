import { combineReducers } from "redux";
import dynamicCounterReducer from "./dynamicCounter/counterReducer";
import counterReducer from "./counter/counterReducer";
import cartReducer from "./shoppingCart/cartReducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	dynamicCounter: dynamicCounterReducer,
	shoppingCart: cartReducer,
});

export default rootReducer;
