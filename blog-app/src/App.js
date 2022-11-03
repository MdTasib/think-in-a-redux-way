import { Provider } from "react-redux";
import BlogList from "./components/BlogList";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import store from "./redux/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<Navbar />
				<SearchField />
				<Description />
				<BlogList />
				<Footer />
			</Provider>
		</>
	);
}

export default App;
