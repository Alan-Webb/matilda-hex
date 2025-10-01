import {useEffect, useState} from "react";
import {FaFilter} from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
	const [products, setProducts] = useState([]);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	function toggleSidebar() {
		setIsSidebarOpen(!isSidebarOpen);
	}

	useEffect(() => {
		setTimeout(() => {
			const fetchedProducts = [
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
			setProducts(fetchedProducts);
		}, 1000);
	}, []);

	return (
		<div className="flex flex-col lg:flex-row bg-black text-white pt-16">
			{/* Mobile Filter Button */}
			<button
				onClick={toggleSidebar}
				className="lg:hidden flex justify-center items-center border border-stone-600 rounded-xl bg-red-800 p-4 m-4 cursor-pointer hover:bg-red-700 transition duration-100">
				<FaFilter className="mr-2" />
				Filters
			</button>

			{/* Filter Side-bar */}
			<div
				className={`${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} fixed inset-y-0 z-50 left-0 w-64 bg-black overflow-y-auto transition-transform duration-300 lg:static shadow-lg shadow-gray-600`}>
				<FilterSidebar
					isSidebarOpen={isSidebarOpen}
					toggleSidebar={toggleSidebar}
				/>
			</div>
			<div className="flex-grow p-4">
				<h2 className="text-2xl uppercase mb-4">All Collections</h2>

				{/* Sort Options */}
				<SortOptions />

				{/* Product Grid */}
				<ProductGrid products={products} />
			</div>
		</div>
	);
};

export default CollectionPage;
