import Blog from "./components/Blog";
import BlogList from "./components/BlogList";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";

function App() {
	return (
		<>
			<Navbar />
			<SearchField />
			<Description />
			<BlogList />
			<Footer />
		</>
	);
}

export default App;
