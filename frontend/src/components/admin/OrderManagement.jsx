const OrderManagement = () => {
	const orders = [
		{
			_id: 91939,
			user: {
				name: "Kal El",
			},
			totalPrice: 165,
			status: "Processing",
		},
	];

	function handleStatusChange(orderId, status) {
		console.log({id: orderId, status});
	}

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 sm:left-28 md:left-72 xl:left-128 w-[27rem] md:w-[32rem] lg:w-[38rem] xl:w-[44rem]">
			<h2 className="text-3xl font-bold mb-1">Order Management</h2>
			<div className="overflow-x-auto shadow-md shadow-white sm:rounded-lg">
				<table className="min-w-full text-left">
					<thead className="bg-stone-700 text-xs uppercase">
						<tr>
							<th className="py-3 px-4">Order ID</th>
							<th className="py-3 px-4">Customer</th>
							<th className="py-3 px-4">Total Price</th>
							<th className="py-3 px-4">Status</th>
							<th className="py-3 px-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{orders.length > 0 ? (
							orders.map((order) => (
								<tr
									key={order._id}
									className="border-b hover:bg-red-800 cursor-pointer">
									<td className="py-4 px-4 font-medium whitespace-nowrap">
										#{order._id}
									</td>
									<td className="p-4">{order.user.name}</td>
									<td className="p-4">€{order.totalPrice}</td>
									<td className="p-4">
										<select
											value={order.status}
											onChange={(e) =>
												handleStatusChange(order._id, e.target.value)
											}
											className="bg-stone-700 border border-stone-300 text-sm rounded block p-2.5">
											<option value="Processing">Processing</option>
											<option value="Shipped">Shipped</option>
											<option value="Delivered">Delivered</option>
											<option value="Cancelled">Cancelled</option>
										</select>
									</td>
									<td className="p-4">
										<button
											onClick={() => handleStatusChange(order._id, "Delivered")}
											className="bg-red-800 p-2 rounded-xl border border-stone-300 uppercase text-sm cursor-pointer hover:bg-red-700">
											Mark Delivered
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={5} className="p-4 text-center text-stone-300">
									No Orders Found
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderManagement;
