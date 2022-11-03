import initialState from "./initialState";
import {
	FILTER_BY_AUTHOR,
	FILTER_BY_CATEGORY,
	FILTER_BY_SEARCH,
} from "./actionTypes";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_BY_AUTHOR:
			const filterByAuthor = state.blogPost.filter(
				item => item.author === action.payload
			);
			return {
				...state,
				blogPost: filterByAuthor,
			};

		case FILTER_BY_CATEGORY:
			const filterByCategory = state.blogPost.filter(
				item => item.type === action.payload
			);
			return {
				...state,
				blogPost: filterByCategory,
			};

		case FILTER_BY_SEARCH:
			const filterBySearch = state.blogPost.filter(
				item => item.author === action.payload
			);
			return {
				...state,
				blogPost: filterBySearch,
			};

		default:
			return state;
	}
};

export default reducer;
