// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// constant
const INCREMENT = "increment";
const DECREMENT = "decrement";

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
