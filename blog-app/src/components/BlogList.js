import React from "react";
import Blog from "./Blog";

function BlogList() {
	return (
		<section class='relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8'>
			<div class='absolute inset-0'>
				<div class='bg-white h-1/3 sm:h-2/3'></div>
			</div>
			<div class='relative max-w-7xl mx-auto'>
				{/* <!-- card grid  --> */}
				<div class='max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
					<Blog />
					<Blog />
					<Blog />
					<Blog />
					<Blog />
					<Blog />
				</div>
			</div>
		</section>
	);
}

export default BlogList;
