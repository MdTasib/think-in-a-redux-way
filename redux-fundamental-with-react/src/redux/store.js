import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";
const { createStore, applyMiddleware } = require("redux");

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
