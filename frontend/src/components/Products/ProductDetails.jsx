const selectedProduct = {
	name: "Cloak of Invisibility Spell Kit",
	price: 60,
	originalPrice: 85,
	description:
		"Ideal for those seeking reprieve from the pressures of constant observation or for moments when you simply wish to fade into the background, this spell weaves an aura of stealth and subtlety around you.",
	expertiseLevel: "Intermediate",
	invocationType: "Blessing",
	images: [
		{
			url: "../../src/assets/cloak-of-invisibility.webp",
			altText: "Cloak of Invisibility",
		},
		{
			url: "../../src/assets/cloak-of-invisibility.webp",
			altText: "Cloak of Invisibility",
		},
	],
};

const ProductDetails = () => {
	return (
		<div className="bg-black text-white p-6">
			<div className="bg-red-800 max-w-6xl mx-auto p-8 rounded-lg">
				<div className="flex flex-col md:flex-row">
					{/* Left Thumbnails */}
					<div className="hidden md:flex flex-col space-y-4 mr-6">
						{selectedProduct.images.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt={image.altText || `Thumbnail ${index}`}
								className="w-60 h-auto object-cover rounded-lg cursor-pointer border border-black shadow-lg shadow-black"
							/>
						))}
					</div>
					{/* Main Image */}
					<div>
						<div className="flex flex-2 mb-4">
							<img
								src={selectedProduct.images[0]?.url}
								alt="main product"
								className="w-full mx-auto max-w-6xl object-cover rounded-lg"
							/>
						</div>
					</div>
					{/* Mobile Thumbnails */}
					<div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
						{selectedProduct.images.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt={image.altText || `Thumbnail ${index}`}
								className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-black shadow-lg shadow-black"
							/>
						))}
					</div>
					{/* Right Section */}
					<div className="flex flex-col md:ms-12">
						<h1 className="text-2xl md:text-3xl font-semibold mb-2">
							{selectedProduct.name}
						</h1>
						<div className="flex gap-4">
							<p className="text-xl text-gray-300 mb-1 line-through">
								Was € {""}
								{selectedProduct.originalPrice &&
									`${selectedProduct.originalPrice}`}
							</p>
							<p className="text-xl mb-2">
								Now € {""}
								{selectedProduct.price}
							</p>
						</div>
						<p className="mb-4">{selectedProduct.description}</p>
						<div className="flex gap-2 mb-2">
							<p className="uppercase">Expertise Level: </p>
							<p className="">{selectedProduct.expertiseLevel}</p>
						</div>
						<div className="flex gap-2 mb-2">
							<p className="uppercase">Invocation Type: </p>
							<p className="">{selectedProduct.invocationType}</p>
						</div>
						{/* Quantity Selection */}
						<div className="mb-6">
							<p className="uppercase ms-2 text-xl">Quantity</p>
							<div className="flex items-center space-x-4 mt-2">
								<button className="p-3 bg-black rounded-xl text-lg border border-gray-600 cursor-pointer">
									-
								</button>
								<span className="text-xl font-bold">1</span>
								<button className="p-2.75 bg-black rounded-xl text-lg border border-gray-600 cursor-pointer">
									+
								</button>
								{/* Add to Cart Button */}
								<button className="w-[12rem] py-3 bg-black rounded-xl text-lg uppercase ms-8 border border-gray-600 cursor-pointer">
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductDetails;
