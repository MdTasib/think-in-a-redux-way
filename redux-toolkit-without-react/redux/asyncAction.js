const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk");

// initial state
const initialState = {
	loading: false,
	posts: [],
	error: "",
};

// actions
const fetchPostLoading = () => {
	return {
		type: "posts/loading",
	};
};

const fetchPostSuccess = posts => {
	return {
		type: "posts/success",
		payload: posts,
	};
};

const fetchPostFailed = error => {
	return {
		type: "posts/failed",
		payload: error,
	};
};

// reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "posts/loading":
			return {
				...state,
				loading: true,
			};
		case "posts/success":
			return {
				...state,
				loading: false,
				error: "",
				posts: action.payload,
			};

		case "posts/failed":
			return {
				...state,
				loading: false,
				posts: [],
				error: action.payload,
			};

		default:
			return state;
	}
};

// thunk function
const fetchPosts = () => {
	return async dispatch => {
		dispatch(fetchPostLoading());

		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts?_limit=5"
			);
			const posts = await response.json();

			dispatch(fetchPostSuccess(posts));
		} catch (error) {
			dispatch(fetchPostFailed(error.message));
		}
	};
};

// store
const store = createStore(reducer, applyMiddleware(thunk.default));

store.subscribe(() => {
	console.log(store.getState());
});

// dispatch thunk action
store.dispatch(fetchPosts());
