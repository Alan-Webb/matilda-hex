import {useEffect, useRef, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const NewArrivals = () => {
	const scrollRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [canScrollLeft, setCanScrollLeft] = useState(true);

	const newArrivals = [
		{
			_id: "1",
			name: "Blessings Specialist Course",
			price: 120,
			image: {
				url: "../../src/assets/blessings-specialist.webp",
				altText: "Blessings Specialist Course",
			},
		},
		{
			_id: "2",
			name: "Hexes Specialist Course",
			price: 120,
			image: {
				url: "../../src/assets/hexes-specialist.webp",
				altText: "Hexes Specialist Course",
			},
		},
		{
			_id: "3",
			name: "Divination Specialist Course",
			price: 120,
			image: {
				url: "../../src/assets/divination-specialist.webp",
				altText: "Divination specialist course",
			},
		},
		{
			_id: "4",
			name: "High Priest / Priestess Certification",
			price: 120,
			image: {
				url: "../../src/assets/high-priest-priestess-certification.webp",
				altText: "High Priest / Priestess Certification",
			},
		},
		{
			_id: "5",
			name: "Foundations Course",
			price: 85,
			image: {
				url: "../../src/assets/foundations.webp",
				altText: "Foundations Course",
			},
		},
		{
			_id: "6",
			name: "Priest / Priestess Foundation Course",
			price: 85,
			image: {
				url: "../../src/assets/priest-priestess-foundations.webp",
				altText: "Priest / Priestess Foundation Course",
			},
		},
		{
			_id: "7",
			name: "Spark of Connection Spell Casting Kit",
			price: 60,
			image: {
				url: "../../src/assets/spark-of-connection.webp",
				altText: "Spark of Connection Spell Casting Kit",
			},
		},
		{
			_id: "8",
			name: "Hex of Unravelling Spell Casting Kit",
			price: 60,
			image: {
				url: "../../src/assets/hex-of-unravelling.webp",
				altText: "Hex of Unravelling Spell Casting Kit",
			},
		},
		{
			_id: "9",
			name: "Dream Weavers Guidance Casting Kit",
			price: 60,
			image: {
				url: "../../src/assets/dreamweavers-guidance.webp",
				altText: "Dream Weavers Guidance Casting Kit",
			},
		},
	];

	useEffect(() => {
		const container = scrollRef.current;

		if (container) {
			container.addEventListener("scroll", updateScrollButtons);
			updateScrollButtons();
		}
	});

	const scroll = (direction) => {
		const scrollAmount = direction === "left" ? -300 : 300;
		scrollRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
	};

	// Update Scroll Buttons
	const updateScrollButtons = () => {
		const container = scrollRef.current;

		if (container) {
			const leftScroll = container.scrollLeft;
			const rightScrollable =
				container.scrollWidth > leftScroll + container.clientWidth;

			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(rightScrollable);
		}

		// console.log({
		// 	scrollLeft: container.scrollLeft,
		// 	clientWidth: container.clientWidth,
		// 	containerScrollWidth: container.containerScrollWidth,
		// });
	};

	return (
		<section className="bg-black text-white">
			<div className="container mx-auto text-center pb-10 relative">
				<h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
				<p className="text-lg mb-8">
					Discover our latest Wicca courses and spell casting kits to enhance
					your life.
				</p>

				{/* Scroll Buttons */}
				<div className="absolute right-0 bottom[-16rem] flex space-x-2">
					<button
						onClick={() => scroll("left")}
						disabled={!canScrollLeft}
						className={`p-2 rounded-full  cursor-pointer ${
							canScrollLeft
								? "bg-white text-black"
								: "bg-red-800 hover:bg-red-700 hover:text-gray-300 transition-all duration-300"
						}`}>
						<FaArrowLeft className="text-2xl" />
					</button>
					<button className="p-2 rounded-full bg-red-800 hover:bg-red-700 hover:text-gray-300 transition-all duration-300 cursor-pointer">
						<FaArrowRight className="text-2xl" />
					</button>
				</div>
			</div>

			{/* Scrollable Content */}
			<div
				ref={scrollRef}
				className="container mx-auto overflow-x-scroll flex space-x-6 relative">
				{newArrivals.map((product) => (
					<div
						key={product._id}
						className="min-w-[100%] sm:min-w-[50%] lg:min-w-[32%] relative">
						<img
							// src={product.image[0]?.url}
							src={product.image.url}
							// alt={product.image[0]?.altText || product.name}
							alt={product.image.altText || product.name}
							className="w-full h-[31.25rem] object-cover rounded-lg"
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md p-4 rounded-b-lg">
							<Link to={`/product/${product._id}`} className="block">
								<h4 className="font-medium text-xl">{product.name}</h4>
								<p className="mt-1 text-lg">€{product.price}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default NewArrivals;
