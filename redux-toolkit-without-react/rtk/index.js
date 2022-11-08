const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");

console.log(store.getState());
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());
store.dispatch(counterActions.decrement());
