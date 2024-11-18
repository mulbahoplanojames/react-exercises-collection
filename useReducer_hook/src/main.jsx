import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CountContextProvider from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<CountContextProvider>
		<App />
	</CountContextProvider>
);
