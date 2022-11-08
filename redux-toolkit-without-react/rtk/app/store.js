const confiqureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice");

const store = confiqureStore({
	reducer: {
		counter: counterReducer,
	},
});

module.exports = store;
