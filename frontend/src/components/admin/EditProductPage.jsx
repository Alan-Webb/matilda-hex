import {useState} from "react";

const EditProductPage = () => {
	const [productData, setProductData] = useState({
		name: "",
		description: "",
		price: 0,
		countInStock: 0,
		sku: "",
		images: [
			{
				url: "https:picsum.photos/150?random=1",
			},
			{
				url: "https:picsum.photos/150?random=2",
			},
		],
	});

	function handleChange(e) {
		const {name, value} = e.target;
		setProductData((prevData) => ({...prevData, [name]: value}));
	}

	async function handleImageUpload(e) {
		const file = e.target.files[0];
		console.log(file);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(file);
	}

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 sm:left-28 md:left-72 xl:left-128 w-[27rem] md:w-[32rem] lg:w-[38rem] xl:w-[44rem] ">
			<h2 className="text-3xl font-bold mb-1">Edit Product</h2>
			<form onSubmit={handleSubmit}>
				{/* Name */}
				<div className="mb-3">
					<label className="block font-semibold mb-2 uppercase">
						Product Name
					</label>
					<input
						type="text"
						name="name"
						value={productData.name}
						onChange={handleChange}
						className="w-full border border-stone-300 rounded-md p-2 bg-transparent"
						required
					/>
				</div>
				{/* Description */}
				<div className="mb-3">
					<label className="block font-semibold mb-2 uppercase">
						Description
					</label>
					<textarea
						name="description"
						value={productData.description}
						onChange={handleChange}
						className="w-full border border-stone-300 rounded-md p-2"
						rows={4}
						required
					/>
				</div>
				{/* Price */}
				<div className="mb-3">
					<label className="block font-semibold mb-2 uppercase">Price</label>
					<input
						type="number"
						name="price"
						value={productData.price}
						onChange={handleChange}
						className="w-full border border-stone-300 rounded-md p-2"
					/>
				</div>
				{/* Count In Stock */}
				<div className="mb-3">
					<label className="block font-semibold mb-2 uppercase">
						Count In Stock
					</label>
					<input
						type="number"
						name="countInStock"
						value={productData.countInStock}
						onChange={handleChange}
						className="w-full border border-stone-300 rounded-md p-2"
					/>
				</div>
				{/* SKU */}
				<div className="mb-4">
					<label className="block font-semibold mb-2 uppercase">SKU</label>
					<input
						type="text"
						name="sku"
						value={productData.sku}
						onChange={handleChange}
						className="w-full border border-stone-300 rounded-md p-2"
					/>
				</div>
				{/* Image Upload */}
				<div className="mb-4">
					<label className="block font-semibold mb-2 uppercase">
						Upload Image
					</label>
					<input
						type="file"
						onChange={handleImageUpload}
						className="bg-stone-700 p-3 rounded-lg cursor-pointer"
					/>
					<div className="flex gap-4 mt-4">
						{productData.images.map((image, index) => (
							<div key={index}>
								<img
									src={image.url}
									alt={image.altText || "Product Image"}
									className="w-20 h-20 object-cover rounded-md shadow"
								/>
							</div>
						))}
					</div>
					{/* Button */}
					<button
						type="submit"
						className="w-full bg-red-800 rounded-lg text-xl uppercase p-2 mx-auto mt-4 cursor-pointer hover:bg-red-700">
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditProductPage;
