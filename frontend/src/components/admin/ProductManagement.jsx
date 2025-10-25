import {Link} from "react-router-dom";

const ProductManagement = () => {
	const products = [
		{
			_id: 666,
			name: "Bind of Betrayal",
			price: 110,
			sku: "91939",
		},
	];

	function handleDelete(id) {
		if (window.confirm("Are you sure you want to delete the product?")) {
			console.log("Delete product ID:", id);
		}
	}

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 sm:left-28 md:left-72 xl:left-128">
			<h2 className="text-2xl font-bold mb-6">Product Management</h2>
			<div className="overflow-x-auto shadow-md shadow-stone-300 rounded-lg w-[27rem] md:w-[32rem] lg:w-[38rem] xl:w-[44rem]">
				<table className="min-w-full text-left">
					<thead className="bg-stone-700 text=xs uppercase">
						<tr>
							<th className="py-3 px-4">Name</th>
							<th className="py-3 px-4">Price</th>
							<th className="py-3 px-4">SKU</th>
							<th className="py-3 px-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.length > 0 ? (
							products.map((product) => (
								<tr
									key={product._id}
									className="border-b hover:bg-red-800 cursor-pointer">
									<td className="p-4 font-medium text-stone-300 whitespace-nowrap">
										{product.name}
									</td>
									<td className="p-4">€{product.price}</td>
									<td className="p-4">{product.sku}</td>
									<td className="p-4">
										<Link
											to={`/admin/products/${product._id}/edit`}
											className="bg-white text-black px-2 py-1 rounded mr-2 hover:bg-stone-300">
											Edit
										</Link>
										<button
											onClick={() => handleDelete(product._id)}
											className="bg-red-800 border border-black px-2 py-1 rounded hover:bg-red-700 cursor-pointer">
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={4} className="p-4 text-center text-stone-300">
									No Products Found
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductManagement;
