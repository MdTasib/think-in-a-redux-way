const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
	dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounter");

console.log(store.getState());
store.subscribe(() => {
	console.log(store.getState());
});

// counter
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());

// dynamicCounter
store.dispatch(dynamicCounterActions.increment(5));
store.dispatch(dynamicCounterActions.increment(10));
store.dispatch(dynamicCounterActions.decrement(2));
