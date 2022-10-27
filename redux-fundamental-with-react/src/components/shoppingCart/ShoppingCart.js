import React from "react";
import Cart from "./Cart";
import Products from "./Products";

const ShoppingCart = () => {
	return (
		<div class='bg-gray-50 h-full md:h-screen'>
			<div class='grid place-items-center'>
				<h1 class='text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4'>
					Shopping Cart
				</h1>
			</div>
			<div class='grid grid-cols-12 gap-6'>
				{/* products */}
				<Products />

				{/* cart */}
				<Cart />
			</div>
		</div>
	);
};

export default ShoppingCart;
