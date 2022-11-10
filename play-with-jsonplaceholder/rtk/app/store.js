const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const postReducer = require("../features/postSlice");
const logger = createLogger();

const store = configureStore({
	reducer: {
		post: postReducer,
	},
	middleware: getDefaultMiddlewares => {
		return getDefaultMiddlewares().concat(logger);
	},
});

module.exports = store;
