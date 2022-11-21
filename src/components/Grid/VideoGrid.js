import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";
import Loading from "../Ui/Loading";

export default function VideoGrid() {
	const dispatch = useDispatch();
	const { videos, isError, isLoading, error } = useSelector(
		state => state.videos
	);
	const { tags, search } = useSelector(state => state.filter);

	useEffect(() => {
		dispatch(fetchVideos({ tags, search }));
	}, [dispatch, tags, search]);

	// decide show content
	let content;

	if (isLoading) {
		content = <Loading />;
	} else if (!isLoading && isError) {
		content = <div className='col-span-12'>{error}</div>;
	} else if (!isLoading && !isError && videos?.length > 0) {
		content = videos.map(video => (
			<VideoGridItem key={video.id} video={video} />
		));
	} else if (!isError && !isLoading && videos?.length === 0) {
		content = <div className='col-span-12'>No videos found!</div>;
	}

	return (
		<section className='p-10'>
			<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
				{content}
			</div>
		</section>
	);
}
