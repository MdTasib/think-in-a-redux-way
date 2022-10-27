import {
	ADD_TO_CART,
	PRODUCT_INCREMENT,
	PRODUCT_DECREMENT,
} from "./actionTypes";

export const addToCart = productId => {
	return {
		type: ADD_TO_CART,
		payload: {
			id: productId,
		},
	};
};

export const productIncrement = productId => {
	return {
		type: PRODUCT_INCREMENT,
		payload: {
			id: productId,
		},
	};
};

export const productDecrement = productId => {
	return {
		type: PRODUCT_DECREMENT,
		payload: {
			id: productId,
		},
	};
};
