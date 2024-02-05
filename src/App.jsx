import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Contact, Home, Portfolio } from "./pages";

function App() {
	return (
		<>
			<Header />
			<main className="site-main">
				<Routes>
					<Route index element={<Home />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
