import { Provider } from "react-redux";
import "./App.css";
import BaseRoutes from "./Routing/routes";
import store from "./Redux/Store/Store";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<Provider store={store}>
			<BaseRoutes />
			<Toaster />
		</Provider>
	);
}

export default App;
