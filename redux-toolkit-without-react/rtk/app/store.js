const confiqureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounter");
const postsReducer = require("../features/posts/postSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = confiqureStore({
	reducer: {
		counter: counterReducer,
		dynamicCounter: dynamicCounterReducer,
		posts: postsReducer,
	},
	middleware: getDefaultMiddlewares => {
		return getDefaultMiddlewares().concat(logger);
	},
});

module.exports = store;
