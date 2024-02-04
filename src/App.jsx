import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<main className="site-main">
				<Routes>
					<Route index element={<h1>Home</h1>} />
					<Route path="portfolio" element={<h1>portfolio</h1>} />
					<Route path="contact" element={<h1>contact</h1>} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
