import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
	const cartItems = useSelector(state => state.shoppingCart.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		let items = 0;
		let price = 0;

		cartItems.forEach(item => {
			items += item.qty;
			price += item.price * item.qty;
		});

		setTotalPrice(price);
		setTotalItems(items);
	}, [cartItems, totalPrice, setTotalPrice, totalItems, setTotalItems]);

	return (
		<div class='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
			<div class='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
				{/* cart item */}
				{cartItems
					.filter(item => item.qty !== 0)
					.map(item => (
						<CartItem item={item} />
					))}

				<div class='flex justify-center items-center text-center'>
					<div class='text-xl font-semibold'>
						<p>Total Item</p>
						<p class='text-5xl'>{totalItems}</p>
					</div>
				</div>
			</div>
			<div class='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
				<div class='flex justify-center items-center text-center'>
					<div class='text-xl font-semibold'>
						<p>Total Price</p>
						<p class='text-5xl'>{totalPrice}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
