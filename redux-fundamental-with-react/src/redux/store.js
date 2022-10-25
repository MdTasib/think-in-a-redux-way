import counterReducer from "./counter/counterReducer";
const { createStore } = require("redux");

const store = createStore(counterReducer);

export default store;
