import {useState} from "react";
import {useNavigate} from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
	products: [
		{
			name: "Bind of Betrayal",
			category: "Hex",
			level: "Intermediate",
			price: 15,
			image: "/src/assets/bind-of-betrayal.webp",
		},
		{
			name: "Blessing of Abundance",
			category: "Blessing",
			level: "Beginner",
			price: 20,
			image: "/src/assets/blessing-of-abundance.webp",
		},
	],
	totalPrice: 35,
};

const Checkout = () => {
	const navigate = useNavigate();
	const [checkoutId, setCheckoutId] = useState(null);
	const [shippingAddress, setShippingAddress] = useState({
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		postalCode: "",
		country: "",
		phone: "",
	});

	function handleCreateCheckout(e) {
		e.preventDefault();
		setCheckoutId(123);
	}

	function handlePaymentSuccess(details) {
		console.log("Payment Successful", details);
		navigate("/order-confirmation");
	}

	return (
		<div className="bg-black text-white">
			<div className="  pt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
				{/* Left Section */}
				<div className="p-6">
					<h2 className="text-2xl uppercase mb-6">Checkout</h2>
					<form onSubmit={handleCreateCheckout}>
						<h3 className="text-lg mb-4 uppercase">Contact Details</h3>
						<div className="mb-4">
							<label className="block mb-2 text-lg">Email</label>
							<input
								type="email"
								value="user@example.com"
								className="w-full p-2 border rounded"
								disabled
							/>
						</div>
						<h3 className="text-lg mb-4 uppercase">Delivery</h3>
						<div className="mb-4 grid grid-cols-2 gap-4">
							{/* First Name */}
							<div>
								<label className="block mb-2 text-lg">First Name</label>
								<input
									type="text"
									value={shippingAddress.firstName}
									onChange={(e) =>
										setShippingAddress({
											...shippingAddress,
											firstName: e.target.value,
										})
									}
									className="w-full p-2 border rounded"
									required
								/>
							</div>
							{/* Last Name */}
							<div>
								<label className="block mb-2 text-lg">Last Name</label>
								<input
									type="text"
									value={shippingAddress.lastName}
									onChange={(e) =>
										setShippingAddress({
											...shippingAddress,
											lastName: e.target.value,
										})
									}
									className="w-full p-2 border rounded"
									required
								/>
							</div>
						</div>
						{/* Address */}
						<div className="mb-4">
							<label className="block mb-2 text-lg">Address</label>
							<input
								type="text"
								value={shippingAddress.address}
								onChange={(e) =>
									setShippingAddress({
										...shippingAddress,
										address: e.target.value,
									})
								}
								className="w-full p-2 border rounded"
								required
							/>
						</div>
						<div className="mb-4 grid grid-cols-2 gap-4">
							{/* City */}
							<div>
								<label className="block mb-2 text-lg">City</label>
								<input
									type="text"
									value={shippingAddress.city}
									onChange={(e) =>
										setShippingAddress({
											...shippingAddress,
											city: e.target.value,
										})
									}
									className="w-full p-2 border rounded"
									required
								/>
							</div>
							{/* Postal Code */}
							<div>
								<label className="block mb-2 text-lg">Postal Code</label>
								<input
									type="text"
									value={shippingAddress.postalCode}
									onChange={(e) =>
										setShippingAddress({
											...shippingAddress,
											postalCode: e.target.value,
										})
									}
									className="w-full p-2 border rounded"
									required
								/>
							</div>
							{/* Country */}
							<div className="mb-4">
								<label className="block mb-2 text-lg">Country</label>
								<input
									type="text"
									value={shippingAddress.country}
									onChange={(e) =>
										setShippingAddress({
											...shippingAddress,
											country: e.target.value,
										})
									}
									className="w-full p-2 border rounded"
									required
								/>
							</div>
							{/* Phone Number */}
							<div className="mb-4">
								<label className="block mb-2 text-lg">Phone Number</label>
								<input
									type="text"
									value={shippingAddress.phone}
									onChange={(e) =>
										setShippingAddress({
											...shippingAddress,
											phone: e.target.value,
										})
									}
									className="w-full p-2 border rounded"
									required
								/>
							</div>
						</div>
						{/* Button */}
						<div className="mt-6">
							{!checkoutId ? (
								<button
									type="submit"
									className="w-full bg-red-800 py-3 text-xl uppercase rounded-xl hover:bg-red-700 border cursor-pointer">
									Continue to Payment
								</button>
							) : (
								<div>
									<h3 className="text-lg mb-4">Pay with Paypal</h3>
									<PayPalButton
										amount={100}
										onSuccess={handlePaymentSuccess}
										onError={(err) => alert("Payment failed. Try again.")}
									/>
								</div>
							)}
						</div>
					</form>
				</div>
				{/* Right Section */}
				<div className="bg-stone-600 p-6 rounded-xl">
					<h3 className="text-xl mb-4 uppercase">Order Summary</h3>
					<div className="border-t py-4 mb-4">
						{cart.products.map((product, index) => (
							<div
								key={index}
								className="flex items-start justify-between py-2 border-b">
								<div className="flex items-start">
									<img
										src={product.image}
										alt={product.name}
										className="w-20 h-24 rounded-xl object-cover mr-4"
									/>
									<div>
										<h3 className="text-md">{product.name}</h3>
										<p>Category: {product.category}</p>
										<p>Level: {product.level}</p>
									</div>
								</div>
								<p className="text-2xl mr-5">
									€{product.price?.toLocaleString()}
								</p>
							</div>
						))}
					</div>
					<div className="flex justify-between items-center text-2xl mb-4">
						<p>Subtotal</p>
						<p className="mr-5">€{cart.totalPrice?.toLocaleString()}</p>
					</div>
					<div className="flex justify-between items-center text-2xl">
						<p>Shipping</p>
						<p className="mr-5">Free</p>
					</div>
					<div className="flex justify-between items-center text-2xl mt-4 pt-4 border-t">
						<p>Total</p>
						<p className="mr-5">€{cart.totalPrice?.toLocaleString()}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
