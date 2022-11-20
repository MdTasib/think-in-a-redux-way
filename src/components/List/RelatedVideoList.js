import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideoItem from "./RelatedVideoItem";
import Loading from "../Ui/Loading";

export default function RelatedVideoList({ currentVideoId, tags }) {
	const dispatch = useDispatch();
	const { relatedVideos, isLoading, isError, error } = useSelector(
		state => state.relatedVideos
	);

	useEffect(() => {
		dispatch(fetchRelatedVideos({ id: currentVideoId, tags }));
	}, [dispatch, currentVideoId, tags]);

	// content displayed
	let content = null;

	if (isLoading) content = <Loading />;
	if (isError) content = <div className='col-span-12'>{error}</div>;
	if (!isLoading && !isError && relatedVideos?.length === 0) {
		content = <div className='col-span-12'>No videos found!</div>;
	}
	if (!isLoading && !isError && relatedVideos?.length > 0) {
		content = relatedVideos.map(video => (
			<RelatedVideoItem key={video.id} video={video} />
		));
	}

	return (
		<div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
			{content}
		</div>
	);
}
