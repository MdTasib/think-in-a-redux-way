import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Videos";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/videos/:id' element={<Video />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
