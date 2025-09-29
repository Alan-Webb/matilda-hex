import {useEffect, useState} from "react";

const OrdersPage = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		// simulate fetch orders
		setTimeout(() => {
			const mockOrders = [
				{
					_id: "22362",
					createdAt: new Date(),
					shippingAddress: {city: "London", country: "UK"},
					orderItems: [
						{
							name: "Light of Clarity",
							image: "../../src/assets/light-of-clarity.webp",
						},
					],
					totalPrice: 125,
					isPaid: true,
				},
				{
					_id: "91939",
					createdAt: new Date(),
					shippingAddress: {city: "London", country: "UK"},
					orderItems: [
						{
							name: "Wings of Inspiration",
							image: "../../src/assets/wings-of-inspiration.webp",
						},
					],
					totalPrice: 185,
					isPaid: true,
				},
			];
			setOrders(mockOrders);
		}, 1000);
	}, []);

	return (
		<div className="max-w-3xl mx-auto p-4 sm:p-6">
			<h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
			<div className="relative rounded-xl overflow-hidden">
				<table className="min-w-full text-center text-white">
					<thead className="bg-stone-600 text-xs uppercase">
						<tr>
							<th className="py-2 px-4 md:py-3 md:pe-8 lg:pe-12">Image</th>
							<th className="py-2 pe-3 md:py-3 md:pe-5 lg:pe-6">Order ID</th>
							<th className="py-2 pe-3 md:py-3 md:pe-5 lg:pe-6">Created</th>
							<th className="py-2 pe-3 md:py-3 md:pe-5 lg:pe-6">
								Shipping Address
							</th>
							<th className="py-2 pe-3 md:py-3 md:pe-5 lg:pe-6">Items</th>
							<th className="py-2 pe-3 md:py-3 md:pe-3 lg:pe-6">Price</th>
							<th className="py-2 pe-8">Status</th>
						</tr>
					</thead>
					<tbody className="text-left">
						{orders.length > 0 ? (
							orders.map((order) => (
								<tr
									key={order._id}
									className="border-b hover:border-red-800 cursor-pointer">
									<td className="py-2 px-2 sm:py-4 sm:px-4">
										<img
											src={order.orderItems[0].image}
											alt={order.orderItems[0].name}
											className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl"
										/>
									</td>
									<td className="py-2 px-2 font-medium text-stone-300">
										#{order._id}
									</td>
									<td className="py-2 px-2">
										{new Date(order.createdAt).toLocaleDateString()}
									</td>
									<td className="py-2 ps-5 md:ps-1 lg:ps-8">
										{order.shippingAddress
											? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
											: "N/A"}
									</td>
									<td className="py-2 px-2 sm:ps-3 md:ps-4 lg:ps-5">
										{order.orderItems.length}
									</td>
									<td className="py-2 lg:ps-2">€{order.totalPrice}</td>
									<td className="py-2 px-2 uppercase">
										<span
											className={`${
												order.isPaid ? "text-yellow-500" : "text-red-800"
											}`}>
											{order.isPaid ? "paid" : "pending"}
										</span>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={7} className="py-4 px-4 text-center">
									You have no orders
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrdersPage;
