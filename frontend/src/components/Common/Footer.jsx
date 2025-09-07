const Footer = () => {
	return (
		<footer className="bg-black text-white border-t border-white py-12 mt-12">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
				<div className="ps-2">
					<h3 className="text-lg mb-4">Newsletter</h3>
					<p className="text-gray-400 mb-4">
						Subscribe for new products and online offers.
					</p>
					<p>Sign up and get 10% off your first order.</p>
					{/* Newsletter Form */}
					<form className="flex">
						<input
							type="email"
							name="email"
							placeholder="Enter your email address"
							className="px-3 py-3 w-full mt-2 text-md border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
							required
						/>
					</form>
					<button
						type="submit"
						className="w-full bg-red-800 p-3 mt-3 text-lg uppercase rounded-xl hover:bg-red-700 transition-all duration-300 cursor-pointer">
						Subscribe
					</button>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
