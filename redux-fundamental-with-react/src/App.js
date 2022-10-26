import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCounter from "./components/HookCounter";
import DynamicHookCounter from "./components/DynamicHookCounter";
import VariableCounter from "./components/VariableCounter";

function App() {
	return (
		<Provider store={store}>
			<div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
				<h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
					Simple Counter Application
				</h1>

				<VariableCounter />
				<VariableCounter dynamic />
				<HookCounter />
				<DynamicHookCounter />
			</div>
		</Provider>
	);
}

export default App;
