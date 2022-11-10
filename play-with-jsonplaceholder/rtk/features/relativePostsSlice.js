const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
	loading: false,
	error: "",
	posts: [],
};

// create thunk function
const fetchPosts = createAsyncThunk("posts/fetchPosts", async title => {
	const queryString = title
		.split(" ")
		.reduce((acc, crr) => `${acc}&title_link=${crr}`);

	const URL = `https://jsonplaceholder.typicode.com/posts?title_like=${queryString}`;
	const response = await fetch(URL);
	const posts = await response.json();
	return posts;
});

const postsSlice = createSlice({
	name: "posts",
	initialState,
	extraReducers: builder => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
			state.posts = action.payload;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
			state.posts = [];
		});
	},
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
