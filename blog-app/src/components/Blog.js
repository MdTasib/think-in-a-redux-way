import React from "react";
import { useDispatch } from "react-redux";
import { categoryFilter, authorFilter } from "../redux/blog/actions";

function Blog({
	blog: { title, type, author, date, time, blogImg, authorImg },
}) {
	const dispatch = useDispatch();

	const handleCategoryFilter = ctg => dispatch(categoryFilter(ctg));
	const handleAuthorFilter = author => dispatch(authorFilter(author));

	return (
		<div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
			<div class='flex-shrink-0'>
				<img class='h-48 w-full object-cover' src={blogImg} alt='' />
			</div>
			<div class='flex-1 bg-white p-6 flex flex-col justify-between'>
				<div class='flex-1'>
					<p
						onClick={() => handleCategoryFilter(type)}
						class='text-sm font-medium text-indigo-600 cursor-pointer'>
						<span class='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800'>
							{type}
						</span>
					</p>
					<a href='#' class='block mt-1'>
						<p class='text-xl font-semibold text-gray-900'>{title}</p>
					</a>
				</div>
				<div class='mt-6 flex items-center'>
					<div class='flex-shrink-0'>
						<img class='h-10 w-10 rounded-full' src={authorImg} alt='' />
					</div>
					<div class='ml-3'>
						<p
							onClick={() => handleAuthorFilter(author)}
							class='cursor-pointer text-sm font-medium text-gray-900 hover:underline'>
							{author}
						</p>
						<div class='flex space-x-1 text-sm text-gray-500'>
							<time datetime='2020-03-16'>{date}</time>
							<span aria-hidden='true'>&middot;</span>
							<span> {time} </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
