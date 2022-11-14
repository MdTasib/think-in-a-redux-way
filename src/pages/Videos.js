import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../features/video/videoSlice";
import Player from "../components/Description/Player";
import Description from "../components/Description/Description";
import RelatedVideoList from "../components/List/RelatedVideoList";
import Loading from "../components/Ui/Loading";

export default function Videos() {
	const { video, isLoading, isError, error } = useSelector(
		state => state.video
	);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchVideo(id));
	}, [dispatch, id]);

	const { id: videoId, link, title, tags } = video || {};

	// decide what to render
	let content = null;
	if (isLoading) content = <Loading />;

	if (!isLoading && isError)
		content = <div className='col-span-12'>{error}</div>;

	if (!isLoading && !isError && !video?.id) {
		content = <div className='col-span-12'>No video found!</div>;
	}

	if (!isLoading && !isError && video?.id) {
		content = (
			<div class='grid grid-cols-3 gap-2 lg:gap-8'>
				<div class='col-span-full w-full space-y-8 lg:col-span-2 pl-6'>
					<Player link={link} title={title} />

					<Description video={video} />
				</div>

				<RelatedVideoList currentVideoId={videoId} tags={tags} />
			</div>
		);
	}

	return (
		<section className='pt-6 pb-20'>
			<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
				{content}
			</div>
		</section>
	);
}
