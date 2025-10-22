import {Link} from "react-router-dom";

const AdminHomePage = () => {
	const orders = [
		{
			_id: 91939,
			user: {
				name: "Barry Allen",
			},
			totalPrice: 110,
			status: "Processing",
		},
		{
			_id: 91939,
			user: {
				name: "Steve Rogers",
			},
			totalPrice: 110,
			status: "Processing",
		},
		{
			_id: 91939,
			user: {
				name: "Diana Prince",
			},
			totalPrice: 110,
			status: "Processing",
		},
		{
			_id: 91939,
			user: {
				name: "Ellen Ripley",
			},
			totalPrice: 110,
			status: "Processing",
		},
		{
			_id: 91939,
			user: {
				name: "Sarah Conner",
			},
			totalPrice: 110,
			status: "Processing",
		},
	];

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 left-28 md:left-72  xl:left-128">
			<h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
				<div className="w-[13rem] p-8 bg-stone-600 shadow-md shadow-stone-300 rounded-lg">
					<h2 className="text-xl font-semibold">Revenue</h2>
					<p className="text-2xl">€91939</p>
				</div>
				<div className="w-[13rem] p-8 bg-stone-600 shadow-md shadow-stone-300 rounded-lg">
					<h2 className="text-xl font-semibold">Total Orders</h2>
					<p className="text-2xl">666</p>
					<Link to="/admin/orders" className="text-stone-300 hover:underline">
						Manage Orders
					</Link>
				</div>
				<div className="w-[13rem] p-8 px-12 bg-stone-600 shadow-md shadow-stone-300 rounded-lg">
					<h2 className="text-xl font-semibold">Total Products</h2>
					<p className="text-2xl">189</p>
					<Link to="/admin/products" className="text-stone-300 hover:underline">
						Manage Products
					</Link>
				</div>
			</div>
			{/* Recent Orders Table */}
			<div className="mt-6">
				<h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full text-left">
						<thead className="bg-stone-600 text-xs uppercase">
							<tr>
								<th className="py-3 px-4">Order ID</th>
								<th className="py-3 px-4">User</th>
								<th className="py-3 px-4">Total Price</th>
								<th className="py-3 px-4">Status</th>
							</tr>
						</thead>
						<tbody>
							{orders.length > 0 ? (
								orders.map((order) => (
									<tr
										key={order._id}
										className="border-b hover:bg-red-800 cursor-pointer">
										<td className="p-4">{order._id}</td>
										<td className="p-4">{order.user.name}</td>
										<td className="p-4">{order.totalPrice}</td>
										<td className="p-4">{order.status}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={4} className="p-4 text-center text-stone-300">
										No Recent Orders Found
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AdminHomePage;
