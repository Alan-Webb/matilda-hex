const checkout = {
	_id: "91939",
	createdAt: new Date(),
	checkoutItems: [
		{
			productId: 1,
			name: "Bind of Betrayal",
			category: "Hex",
			level: "Intermediate",
			price: 15,
			quantity: 1,
			image: "/src/assets/bind-of-betrayal.webp",
		},
		{
			productId: 2,
			name: "Blessing of Abundance",
			category: "Blessing",
			level: "Beginner",
			price: 20,
			quantity: 2,
			image: "/src/assets/blessing-of-abundance.webp",
		},
		{
			productId: 3,
			name: "Scrying Shadows",
			category: "Divination",
			level: "Advanced",
			price: 25,
			quantity: 1,
			image: "/src/assets/scrying-shadows.webp",
		},
	],
	shippingAddress: {
		address: "2 Acacia Avenue",
		city: "London",
		country: "UK",
	},
};

const OrderConfirmation = () => {
	function calculateEstimatedDelivery(createdAt) {
		const orderDate = new Date(createdAt);
		orderDate.setDate(orderDate.getDate() + 10);
		return orderDate.toLocaleDateString();
	}

	return (
		<div className="bg-black text-white">
			<div className="max-w-4xl mx-auto p-6">
				<h1 className="text-4xl font-bold text-center mb-8 mt-18">
					Thank You for Your Order, Blessed Be!
				</h1>

				{checkout && (
					<div className="bg-stone-700 p-6 rounded-xl border border-stone-300">
						<div className="flex justify-between mb-20">
							{/* Order Id and Date */}
							<div>
								<h2 className="text-xl font-semibold">
									Order ID:
									{checkout._id}
								</h2>
								<p>
									Order date:{" "}
									{new Date(checkout.createdAt).toLocaleDateString()}
								</p>
							</div>
							{/* Estimated Delivery */}
							<div>
								<p className="text-sm">
									Estimated Delivery:{" "}
									{calculateEstimatedDelivery(checkout.createdAt)}
								</p>
							</div>
						</div>
						{/* Ordered Items */}
						<div className="mb-20">
							{checkout.checkoutItems.map((item) => (
								<div key={item.productId} className="flex items-center mb-4">
									<img
										src={item.image}
										alt={item.name}
										className="w-16 h-16 object-cover rounded-xl mr-4"
									/>
									<div>
										<h4 className="text-md font-semibold">{item.name}</h4>
										<p className="text-sm">
											{item.category} | {item.level}
										</p>
									</div>
									<div className="ml-auto text-right">
										<p className="text-2xl">€{item.price}</p>
										<p className="text-sm text-stone-300">
											Qty: {item.quantity}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default OrderConfirmation;
