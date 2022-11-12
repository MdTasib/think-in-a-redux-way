import React from "react";
import VideoGrid from "../components/Grid/VideoGrid";
import Tags from "../components/Tag/Tags";
import Pagination from "../components/Ui/Pagination";

export default function Home() {
	return (
		<>
			<Tags />
			<VideoGrid />
			<Pagination />
		</>
	);
}
