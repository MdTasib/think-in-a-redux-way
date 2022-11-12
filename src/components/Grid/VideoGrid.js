import React from "react";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
	return (
		<section className='p-10'>
			<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
				<VideoGridItem />
				{/* <div className="col-span-12">some error happened</div> */}
			</div>
		</section>
	);
}
