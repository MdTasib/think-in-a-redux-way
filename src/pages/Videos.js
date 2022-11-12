import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Player from "../components/Description/Player";
import Description from "../components/Description/Description";
import RelatedVideoList from "../components/List/RelatedVideoList";

export default function Videos() {
	return (
		<div>
			<Navbar />

			<section className='pt-6 pb-20'>
				<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
					<div className='grid grid-cols-3 gap-2 lg:gap-8'>
						<div className='col-span-full w-full space-y-8 lg:col-span-2'>
							<Player />

							<Description />
						</div>

						<RelatedVideoList />
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
