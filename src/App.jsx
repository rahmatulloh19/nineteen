import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Contact, Home, NotFound, Portfolio, SinglePage } from "./pages";

function App() {
	return (
		<>
			<Header />
			<main className="site-main">
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="contact" element={<Contact />} />
					<Route path="single-page/:id" element={<SinglePage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
