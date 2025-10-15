import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const OrderDetails = () => {
	const {id} = useParams();
	const [orderDetails, setOrderDetails] = useState(null);

	useEffect(() => {
		const mockOrderDetails = {
			_id: id,
			createdAt: new Date(),
			isPaid: true,
			isDelivered: false,
			paymentMethod: "payPal",
			shippingMethod: "Standard",
			shippingAddress: {city: "London", country: "UK"},
			orderItems: [
				{
					productId: 1,
					name: "Bind of Betrayal",
					price: 15,
					quantity: 1,
					image: "/src/assets/bind-of-betrayal.webp",
				},
				{
					productId: 2,
					name: "Blessing of Abundance",
					price: 20,
					quantity: 2,
					image: "/src/assets/blessing-of-abundance.webp",
				},
				{
					productId: 3,
					name: "Scrying Shadows",
					price: 25,
					quantity: 1,
					image: "/src/assets/scrying-shadows.webp",
				},
			],
		};
		setOrderDetails(mockOrderDetails);
	}, [id]);

	return (
		<div className="bg-black text-white pt-18 ">
			<div className="max-w-7xl mx-auto p-4 sm:p-6">
				<h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
				{!orderDetails ? (
					<p>No Order details found</p>
				) : (
					<div className="bg-stone-700 p-4 sm:p-6 rounded-xl border border-stone-300">
						{/* Order Info */}
						<div className="flex flex-col sm:flex-row justify-between mb-8">
							<div>
								<h3 className="text-lg md:text-xl font-semibold">
									Order ID: #{orderDetails._id}
								</h3>
								<p className="text-stone-300">
									{new Date(orderDetails.createdAt).toLocaleDateString()}
								</p>
							</div>
							<div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
								<span
									className={`${
										orderDetails.isPaid ? "bg-black" : "bg-red-800"
									} px-3 py-1 text-stone-300 uppercase rounded-full text-sm font-bold mb-2`}>
									{orderDetails.isPaid ? "Approved" : "Pending"}
								</span>
								<span
									className={`${
										orderDetails.isDelivered ? "bg-black" : "bg-red-800"
									} px-3 py-1 text-stone-300 uppercase rounded-full text-sm font-bold mb-2`}>
									{orderDetails.isDelivered ? "Delivered" : "Pending"}
								</span>
							</div>
						</div>
						{/* Customer, Payment, Shipping Info */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
							<div>
								<h4 className="text-lg font-semibold mb-2">Payment Info</h4>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default OrderDetails;
