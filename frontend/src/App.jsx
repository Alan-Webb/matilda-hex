import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Spells from "./pages/Spells";
import Product from "./pages/Product";
import Testimonials from "./pages/Testimonials";

const App = () => {
	return (
		<main>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/spells" element={<Spells />} />
				<Route path="/productId" element={<Product />} />
				<Route path="/testimonials" element={<Testimonials />} />
			</Routes>
		</main>
	);
};
export default App;
