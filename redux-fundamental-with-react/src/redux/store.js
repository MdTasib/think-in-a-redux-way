import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const { createStore, applyMiddleware } = require("redux");

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;
