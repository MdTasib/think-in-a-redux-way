import React from "react";
import clearSearch from "../assets/search.svg";
import { useDispatch } from "react-redux";
import { searchFilter } from "../redux/blog/actions";

function SearchField() {
	const dispatch = useDispatch();

	const handleSearch = searchInput => {
		let timerOut = setTimeout(() => {
			dispatch(searchFilter(searchInput));
		}, 1000);
		return () => clearTimeout(timerOut);
	};

	return (
		<div class='border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200'>
			<input
				onChange={e => handleSearch(e.target.value)}
				class='outline-none border-none bg-gray-50 h-full w-full mr-2'
				type='search'
				name='search'
				placeholder='Search'
			/>
			<img class='inline h-6 cursor-pointer' src={clearSearch} alt='Search' />
		</div>
	);
}

export default SearchField;
