const store = require("./store");
const { increment, decrement } = require("./counter/actions");

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
