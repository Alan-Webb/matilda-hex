import {useState} from "react";

const EditProductPage = () => {
	const [productData, setProductData] = useState({
		name: "",
		description: "",
		price: 0,
		countInStock: 0,
		sku: "",
		invocationType: ["Blessing", "Hex", "Divination"],
		expertiseLevel: ["Beginner", "Intermediate", "Expert"],
		images: [
			{
				url: "https:picsum.photos.150?random=1",
			},
			{
				url: "https:picsum.photos.150?random=2",
			},
		],
	});

	function handleChange(e) {
		const {name, value} = e.target.value;
		setProductData((prevData) => ({...prevData, [name]: value}));
	}

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 sm:left-28 md:left-72 xl:left-128 w-[27rem] md:w-[32rem] lg:w-[38rem] xl:w-[44rem] ">
			<h2 className="text-3xl font-bold mb-3">Edit Product</h2>
			<form>
				{/* Name */}
				<div className="mb-4">
					<label className="block font-semibold mb-2 uppercase">
						Product Name
					</label>
					<input
						type="text"
						name="name"
						value={productData.name}
						onChange={handleChange}
						className="w-full border border-stone-300 rounded-md p-2"
						required
					/>
				</div>
				{/* Description */}
				<div className="mb-4">
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
				<div className="mb-4">
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
				<div className="mb-4">
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
				{/* Invocation Type */}
				<div className="mb-4">
					<label className="block font-semibold mb-2 uppercase">Invocation Type</label>
					<input
						type="text"
						name="invocationType"
						value={productData.invocationType}
						onChange={(e)=>setProductData({...productData, category: e.target.value})}
						className="w-full border border-stone-300 rounded-md p-2"
					/>
				</div>
				{/* Expertise Level */}
				<div className="mb-4">
					<label className="block font-semibold mb-2 uppercase">Category</label>
					<input
						type="text"
						name="category"
						value={productData.category}
						onChange={(e)=>setProductData({...productData, category: e.target.value})}
						className="w-full border border-stone-300 rounded-md p-2"
					/>
				</div>
			</form>
		</div>
	);
};

export default EditProductPage;
