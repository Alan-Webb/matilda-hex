import {CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {MdDeleteForever} from "react-icons/md";

const CartContents = () => {
	const cartProducts = [
		{
			productId: 1,
			name: "Bind of Betrayal",
			category: "Hex",
			level: "Intermediate",
			quantity: 1,
			price: 15,
			image: "/src/assets/bind-of-betrayal.webp",
		},
		{
			productId: 2,
			name: "Blessing of Abundance",
			category: "Blessing",
			level: "Beginner",
			quantity: 2,
			price: 20,
			image: "/src/assets/blessing-of-abundance.webp",
		},
		{
			productId: 3,
			name: "Scrying Shadows",
			category: "Divination",
			level: "Advanced",
			quantity: 1,
			price: 25,
			image: "/src/assets/scrying-shadows.webp",
		},
	];

	return (
		<div>
			{cartProducts.map((product, index) => (
				<div
					key={index}
					className="flex items-start justify-between py-4 border-b">
					<div className="flex items-center">
						<img
							src={product.image}
							alt={product.name}
							className="w-20 h-24 object-cover mr-4 rounded-lg"
						/>
						<div>
							<h3>{product.name}</h3>
							<p className="text-sm">
								category: {product.category} | level: {product.level}
							</p>
							<div className="flex items-center mt-2">
								<button className="rounded-full text-3xl m-1 font-medium bg-red-800 hover:text-red-700 cursor-pointer">
									<CiCircleMinus />
								</button>
								<span className="mx-4 text-2xl">{product.quantity}</span>
								<button className="rounded-full text-3xl m-1 font-medium bg-red-800 hover:text-red-700 cursor-pointer">
									<CiCirclePlus />
								</button>
							</div>
						</div>
					</div>
					<div>
						<p className="text-xl sm:text-2xl md:text-3xl mr-4 my-4 ">
							€ {product.price.toLocaleString()}
						</p>
						<button>
							<MdDeleteForever className="text-red-800 h-6 w-6 ms-3 md:ms-4 cursor-pointer hover:text-red-700" />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
export default CartContents;
