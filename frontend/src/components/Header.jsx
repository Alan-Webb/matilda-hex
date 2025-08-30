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
		<header className="w-full z-50 bg-black text-white border-b border-white">
			<div className="flex justify-between py-3">
				{/* Logo left side */}
				<Link to={"/"} className="flex flex-1">
					<div className="text-3xl p-4 hover:text-red-800">
						Matilda Hex
						<img
							src={Logo}
							alt="Matilda Hex Logo"
							className="inline-block h-8 ms-3 mb-1"
						/>
					</div>
				</Link>
				{/* Navbar */}
				<div className="flex-1">
					<Navbar />
				</div>
				{/* Buttons Right Side */}
				<div className="flex flex-1 items-center justify-end gap-x-8">
					{/* Menu Toggle */}
					<FaBars className="xl:hidden text-xl cursor-pointer" />
					{/* Search Icons */}
					<FaSearch className="text-lg cursor-pointer hover:text-red-500" />
					{/* Cart */}
					<Link to={"/cart"} className="flex relative">
						<FaShoppingBasket className="text-[2rem] hover:text-red-500" />
						<span className="absolute top-3.5 left-[-0.5rem] flex justify-center items-center  text-[0.75rem] w-5 h-5 font-semibold rounded-full bg-red-800 shadow-md shadow-gray-400 outline-gray-400">
							0
						</span>
					</Link>
					{/* User Profile */}
					<div className="relative">
						<div>
							{token ? (
								<div>
									<FaCircleUser className="text-[1.8rem] cursor-pointer" />
								</div>
							) : (
								<button className="flex items-center  gap-x-2 border border-gray-400 rounded-3xl bg-red-800 shadow-md shadow-gray-400 py-2 px-6 me-6 text-[1.4rem] cursor-pointer">
									Login
									<RiUserLine className="text-xl" />
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
