import {Link} from "react-router-dom";
import Logo from "/src/assets/matty-hex-logo.webp";
import {HiOutlineUser} from "react-icons/hi";
import {FaBagShopping, FaBars} from "react-icons/fa6";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<>
			<nav className="w-full fixed mx-auto flex items-center justify-between py-4 px-6 bg-black border-b border-white text-white">
				{/* Left Side Logo */}
				<div>
					<Link to="/">
						<div className="text-2xl font-medium">
							Matilda Hex
							<img
								src={Logo}
								alt="Matilda Hex Logo"
								className="inline-block h-8 w-8 ms-4"
							/>
						</div>
					</Link>
				</div>
				{/* Navigation Links */}
				<div className="hidden md:flex space-x-6">
					<Link
						to="#"
						className="text-lg font-medium uppercase hover:text-red-500">
						Blessings
					</Link>
					<Link
						to="#"
						className="text-lg font-medium uppercase hover:text-red-500">
						Hexes
					</Link>
					<Link
						to="#"
						className="text-lg font-medium uppercase hover:text-red-500">
						Divination
					</Link>
					<Link
						to="#"
						className="text-lg font-medium uppercase hover:text-red-500">
						Courses
					</Link>
				</div>
				{/* Right Side Icons */}
				<div className="flex items-center space-x-4">
					<Link to="/profile">
						<HiOutlineUser className="h-6 w-6 hover:text-red-500" />
					</Link>
					<button className="relative">
						<FaBagShopping className="relative h-6 w-6 hover:text-red-500" />
						<span className="absolute top-3.5 right-3 bg-red-700 text-sm rounded-full px-2 py-0.2">
							6
						</span>
					</button>
					{/* Search */}
					<SearchBar />
					{/* Mobile Navigation */}
					<button className="md:hidden cursor-pointer">
						<FaBars className="h-6 w-6" />
					</button>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
