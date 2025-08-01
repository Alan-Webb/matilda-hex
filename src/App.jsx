import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<main className="text-white bg-black antialiased">
			<Navbar />
			<Hero />
		</main>
	);
};
export default App;
