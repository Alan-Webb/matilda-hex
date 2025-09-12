import {Link} from "react-router-dom";

const NewArrivals = () => {
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
	];

	return (
		<section className="bg-black text-white">
			<div className="mx-auto text-center pb-10 relative">
				<h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
				<p className="text-lg mb-8">
					Discover our latest Wicca courses and spell casting kits to enhance
					your life.
				</p>
			</div>
			<div className="container mx-auto flex space-x-6 pb-8">
				{newArrivals.map((product) => (
					<div
						key={product._id}
						className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
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
