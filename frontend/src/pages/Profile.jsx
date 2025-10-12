import OrdersPage from "./OrdersPage";

const Profile = () => {
	return (
		<div className="min-h-screen flex-flex-col bg-stone-700 text-white">
			<div className="flex-grow container mx-auto p-4 md:p-6">
				<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
					{/* Left Section: customer details */}
					<div className="w-full bg-black md:w-1/3 lg:w-1/4 border rounded-xl p-6 mt-24">
						<h1 className="text-2xl md:text-3xl font-bold mb-4">Jane Doe</h1>
						<p className="text-lg text-stone-300 mb-4">janedoe@example.com</p>
						<button className="w-full bg-red-800 py-2 px-4 rounded-xl hover:bg-red-600 uppercase">
							Logout
						</button>
					</div>

					{/* Right Section: orders table */}
					<div className="w-full md:w-2/3 lg:w-3/4 bg-black border rounded-xl mt-12">
						<OrdersPage />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
