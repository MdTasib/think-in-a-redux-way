import {
	ADD_TO_CART,
	PRODUCT_DECREMENT,
	PRODUCT_INCREMENT,
} from "./actionTypes";

const initialState = {
	products: [
		{
			id: 1,
			name: "Dell E1916HV 18.5 Inch",
			price: 9300,
			qty: 10,
		},
		{
			id: 2,
			name: "Canon Eos 4000D 18MP",
			price: 36500,
			qty: 5,
		},
		{
			id: 3,
			name: "Asus Vivobook X515MA",
			price: 35500,
			qty: 10,
		},
	],
	cart: [],
	currentItem: null,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			//check the product data from the product array
			const item = state.products.find(
				product => product.id === action.payload.id
			);
			//check the cart data from the cart array
			const inCart = state.cart.find(item =>
				item.id === action.payload.id ? true : false
			);
			return {
				...state,
				products: state.products.map(item =>
					item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
				),
				cart: inCart
					? state.cart.map(item =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart, { ...item, qty: 1 }],
			};

		case PRODUCT_INCREMENT:
			return {
				...state,
				products: state.products.map(item =>
					item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
				),
				cart: state.cart.map(item =>
					item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
				),
			};

		case PRODUCT_DECREMENT:
			return {
				...state,
				products: state.products.map(item =>
					item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
				),
				cart: state.cart.map(item =>
					item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
				),
			};

		default:
			return state;
	}
};

export default cartReducer;
