import {useState} from "react";

const EditProductPage = () => {
	const [productData, setproductData] = useState({
		name: "",
		description: "",
		price: 0,
		countInStock: 0,
		sku: "",
		category: "",
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

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 sm:left-28 md:left-72 xl:left-128">
			EditProductPage
		</div>
	);
};

export default EditProductPage;
