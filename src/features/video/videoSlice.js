import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "../video/videoApi";

// initial state
const initialState = {
	video: {},
	isLoading: false,
	isError: false,
	error: "",
};

// create async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async id => {
	const video = await getVideo(id);
	console.log(video);
	return video;
});

// create slice
const videoSlice = createSlice({
	name: "video",
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchVideo.pending, state => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchVideo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.video = action.payload;
			})
			.addCase(fetchVideo.rejected, (state, action) => {
				state.isLoading = false;
				state.video = {};
				state.isError = true;
				state.error = action.error.message;
			});
	},
});

export default videoSlice.reducer;
