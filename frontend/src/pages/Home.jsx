import Hero from "../components/Layout/Hero";
import CollectionSection from "../components/Products/CollectionSection";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
	return (
		<div>
			<Hero />
			<CollectionSection />
			<NewArrivals />
			{/* Best Seller */}
			<h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
		</div>
	);
};
export default Home;
