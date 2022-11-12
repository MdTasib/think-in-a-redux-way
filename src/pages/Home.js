import React from "react";
import Footer from "../components/Footer";
import VideoGrid from "../components/Grid/VideoGrid";
import Navbar from "../components/Navbar/Navbar";
import Tags from "../components/Tag/Tags";
import Pagination from "../components/Ui/Pagination";

export default function Home() {
	return (
		<>
			<Navbar />
			<Tags />
			<VideoGrid />
			<Pagination />
			<Footer />
		</>
	);
}
