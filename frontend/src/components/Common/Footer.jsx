import {Link} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";
import {IoLogoInstagram} from "react-icons/io";
import {FaXTwitter} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-black text-white border-t border-white py-12 mt-12">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
				<div className="ps-2 text-lg">
					<h3 className="uppercase mb-4">Newsletter</h3>
					<p className="mb-4">Subscribe for new products and offers</p>
					<p className="mb-4">Sign up and get 10% off your first order</p>
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

				{/* Shop Links */}
				<div className="text-lg md:ms-12">
					<h3 className="uppercase mb-4">Shop</h3>
					<ul className="space-y-3 text-gray-300">
						<li>
							<Link to="#" className="hover:text-red-700">
								Blessings
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-red-700">
								Hexes
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-red-700">
								Divination
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-red-700">
								Courses
							</Link>
						</li>
					</ul>
				</div>

				{/* Support Links */}
				<div className="text-lg">
					<h3 className="uppercase mb-4">Support</h3>
					<ul className="space-y-3 text-gray-300">
						<li>
							<Link to="#" className="hover:text-red-700">
								Contact Us
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-red-700">
								About Us
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-red-700">
								FAQs
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-red-700">
								Features
							</Link>
						</li>
					</ul>
				</div>

				{/* Follow us */}
				<div>
					<h3 className="text-lg uppercase mb-4">Follow Us</h3>
					<div className="flex items-center space-x-4 mb-12">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-red-700">
							<FaFacebook className="h-6 w-6" />
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-red-700">
							<IoLogoInstagram className="h-7 w-7" />
						</a>
						<a
							href="https://www.x.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-red-700">
							<FaXTwitter className="h-6 w-6" />
						</a>
					</div>
					<p className="text-lg uppercase mb-3">Call Us</p>
					<div className="flex space-x-4">
						<BsFillTelephoneFill className="mt-1" />
						<a href="tel:+4420 7251 4571" className="hover:text-gray-300">
							020 7251 4571
						</a>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="container mx-auto mt-12 lg:px-0 border-t pt-6">
				<p className="text-gray-300 text-sm tracking-tighter text-center">
					© 2025, Matilda Hex. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
