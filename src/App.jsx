import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
