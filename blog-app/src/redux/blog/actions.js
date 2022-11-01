import {
	FILTER_BY_AUTHOR,
	FILTER_BY_CATEGORY,
	FILTER_BY_SEARCH,
} from "./actionTypes";

export const searchFilter = text => {
	return {
		type: FILTER_BY_SEARCH,
		payload: text,
	};
};

export const authorFilter = author => {
	return {
		type: FILTER_BY_AUTHOR,
		payload: author,
	};
};

export const categoryFilter = category => {
	return {
		type: FILTER_BY_CATEGORY,
		payload: category,
	};
};
