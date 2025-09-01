import {FaFacebook} from "react-icons/fa";
import {IoLogoInstagram} from "react-icons/io";
import {FaXTwitter} from "react-icons/fa6";

const TopBar = () => {
	return (
		<div className="bg-red-600 text-white">
			<div className="container mx-auto flex justify-between items-center py-3">
				{/* Social Media Links */}
				<div className="hidden md:flex items-center space-x-4">
					<a href="#" className="hover:text-gray-300">
						<FaFacebook className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-300">
						<IoLogoInstagram className="h-5 w-5" />
					</a>
					<a href="#" className="hover:text-gray-300">
						<FaXTwitter className="h-4.5 w-4.5" />
					</a>
				</div>

				{/* Right Side Tagline and Phone */}
				<div className="text-md text-center flex-grow">
					<span>We Ship Worldwide - Fast and reliable Wiccan Solutions</span>
				</div>
				<div className="hidden md:block">
					<a href="tel:+4420 7251 4571" className="hover:text-gray-300">
						TEL: 020 7251 4571
					</a>
				</div>
			</div>
		</div>
	);
};
export default TopBar;
