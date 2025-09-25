import Hero from "../components/Layout/Hero";
import CollectionSection from "../components/Products/CollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import Features from "../components/Products/Features";

const placeholderProducts = [
	{
		_id: 1,
		name: "Blessing of Abundance",
		price: 120,
		images: [
			{
				url: "../../src/assets/blessing-of-abundance.webp",
				altText: "Blessing of Abundance",
			},
		],
	},
	{
		_id: 2,
		name: "Dreamweavers Guidance",
		price: 115,
		images: [
			{
				url: "../../src/assets/dreamweavers-guidance.webp",
				altText: "Dreamweavers Guidance",
			},
		],
	},
	{
		_id: 3,
		name: "Wings of Inspiration",
		price: 130,
		images: [
			{
				url: "../../src/assets/wings-of-inspiration.webp",
				altText: "Wings of Inspiration",
			},
		],
	},
	{
		_id: 4,
		name: "Essence of Joy",
		price: 125,
		images: [
			{
				url: "../../src/assets/essence-of-joy.webp",
				altText: "Essence of Joy",
			},
		],
	},
	{
		_id: 5,
		name: "Blessing of Abundance",
		price: 120,
		images: [
			{
				url: "../../src/assets/blessing-of-abundance.webp",
				altText: "Blessing of Abundance",
			},
		],
	},
	{
		_id: 6,
		name: "Dreamweavers Guidance",
		price: 115,
		images: [
			{
				url: "../../src/assets/dreamweavers-guidance.webp",
				altText: "Dreamweavers Guidance",
			},
		],
	},
	{
		_id: 7,
		name: "Wings of Inspiration",
		price: 130,
		images: [
			{
				url: "../../src/assets/wings-of-inspiration.webp",
				altText: "Wings of Inspiration",
			},
		],
	},
	{
		_id: 8,
		name: "Essence of Joy",
		price: 125,
		images: [
			{
				url: "../../src/assets/essence-of-joy.webp",
				altText: "Essence of Joy",
			},
		],
	},
];

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

			<div className="mx-auto px-8 bg-black text-white pt-12">
				<h2 className="text-3xl text-center font-bold mb-4">
					Popular Blessings
				</h2>
				<ProductGrid products={placeholderProducts} />
			</div>
			<FeaturedCollection />
			<Features />
		</div>
	);
};
export default Home;
