import {Link} from "react-router-dom";
import {useState} from "react";
import Logo from "../assets/matty-hex-logo.webp";
import Navbar from "./Navbar";
import {
	FaBars,
	FaCircle,
	FaUser,
	FaSearch,
	FaShoppingBasket,
} from "react-icons/fa";
import {FaCircleUser} from "react-icons/fa6";
import {RiUserLine} from "react-icons/ri";

const Header = () => {
	const [token, settoken] = useState(``);

	return (
		<header className="w-full z-50 bg-black text-white">
			<div className="flex justify-between py-3">
				{/* Logo left side */}
				<Link to={"/"} className="flex flex-1">
					<div className="text-3xl p-4">
						Matilda Hex
						<img
							src={Logo}
							alt="Matilda Hex Logo"
							className="inline-block h-8 ms-3 mb-1"
						/>
					</div>
				</Link>
				{/* Navbar */}
				<div className="flex-1 bg-pink-200">
					<Navbar />
				</div>
				{/* Buttons Right Side */}
				<div className="flex flex-1 items-center justify-end gap-x-4 xs:gap-x-8">
					{/* Menu Toggle */}
					<FaBars className="xl:hidden text-xl cursor-pointer" />
					{/* Search Icons */}
					<FaSearch className="text-lg cursor-pointer" />
					{/* Cart */}
					<Link to={"/cart"} className="flex relative">
						<FaShoppingBasket className="text-[1.688rem]" />
						<span className="absolute left-[-0.25rem] top-3.5 flex justify-center items-center  text-[0.75rem] w-5 h-5 font-semibold rounded-full bg-red-800 shadow-inner shadow-pink-100">
							0
						</span>
					</Link>
					{/* User Profile */}
					<div>
						<div>
							{token ? (
								<div>
									<FaCircleUser />
								</div>
							) : (
								<button>
									Login
									<RiUserLine />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
