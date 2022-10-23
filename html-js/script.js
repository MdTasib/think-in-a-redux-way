// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const resetEl = document.getElementById("reset");

// constant
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// action creators
const increment = value => {
	return {
		type: INCREMENT,
		payload: value,
	};
};

const decrement = value => {
	return {
		type: DECREMENT,
		payload: value,
	};
};

const reset = () => {
	return {
		type: RESET,
	};
};

// initial state
const initialState = {
	value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
	if (action.type === INCREMENT) {
		return {
			...state,
			value: state.value + action.payload,
		};
	} else if (action.type === DECREMENT) {
		return {
			...state,
			value: state.value - action.payload,
		};
	} else if (action.type === RESET) {
		return {
			...state,
			value: 0,
		};
	} else {
		return state;
	}
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
	const state = store.getState();

	counterEl.innerText = state.value.toString();
};

// update ui initially
render();

store.subscribe(render);

// event handler
incrementEl.addEventListener("click", function () {
	store.dispatch(increment(5));
});

decrementEl.addEventListener("click", function () {
	store.dispatch(decrement(2));
});

resetEl.addEventListener("click", function () {
	store.dispatch(reset());
});
