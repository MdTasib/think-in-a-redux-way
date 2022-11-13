import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos } from "../videos/videosApi";

// initial state
const initialState = {
	videos: [],
	isLoading: false,
	isError: false,
	error: "",
};

// async thunk
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
	const videos = await getVideos();
	return videos;
});

// create slice
const videoSlice = createSlice({
	name: "videos",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchVideos.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.videos = action.payload;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isError = true;
				state.error = action.error?.message;
				state.isLoading = false;
				state.videos = [];
			});
	},
});

export default videoSlice.reducer;
