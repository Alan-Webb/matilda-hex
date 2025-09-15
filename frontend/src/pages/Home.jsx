import Hero from "../components/Layout/Hero";
import CollectionSection from "../components/Products/CollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
	return (
		<div>
			<Hero />
			<CollectionSection />
			<NewArrivals />
			{/* Best Seller */}
			<h2 className="bg-black text-white text-3xl text-center font-bold pt-12 pb-4">
				Best Sellers
			</h2>
			<ProductDetails />
		</div>
	);
};
export default Home;
