import {FaFacebook} from "react-icons/fa";
import {IoLogoInstagram} from "react-icons/io";
import {FaXTwitter} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";

const TopBar = () => {
	return (
		<div className="bg-red-800 text-white">
			<div className="container mx-auto flex justify-between items-center py-3">
				{/* Social Media Links */}
				<div className="hidden md:flex md:ms-2 items-center space-x-4">
					<a href="#" className="hover:text-stone-400">
						<FaFacebook className="h-6 w-6" />
					</a>
					<a href="#" className="hover:text-stone-400">
						<IoLogoInstagram className="h-7 w-7" />
					</a>
					<a href="#" className="hover:text-stone-400">
						<FaXTwitter className="h-5.5 w-5.5" />
					</a>
				</div>

				{/* Right Side Tagline and Phone */}
				<div className="text-lg text-center flex-grow">
					<span>We Ship Worldwide - Fast and reliable Wiccan Solutions</span>
				</div>
				<div className="hidden md:flex text-lg">
					<BsFillTelephoneFill className="mt-1" />
					<a href="tel:+4420 7251 4571" className="hover:text-stone-400 ms-2">
						020 7251 4571
					</a>
				</div>
			</div>
		</div>
	);
};
export default TopBar;
