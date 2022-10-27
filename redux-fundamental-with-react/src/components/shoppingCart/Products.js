import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
	const products = useSelector(state => state.shoppingCart.products);

	return (
		<div class='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
			{products.map(product => (
				<Product product={product} />
			))}
		</div>
	);
};

export default Products;
