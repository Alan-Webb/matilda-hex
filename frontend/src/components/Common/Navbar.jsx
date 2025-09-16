import {Link} from "react-router-dom";
import {useState} from "react";
import Logo from "/src/assets/matty-hex-logo.webp";
import {HiOutlineUser} from "react-icons/hi";
import {FaBagShopping, FaBars} from "react-icons/fa6";
import {IoIosClose} from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [navOpen, setNavOpen] = useState(false);

	const toggleCartDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const toggleNavMenu = () => {
		setNavOpen(!navOpen);
	};

	return (
		<>
			<nav className="w-full fixed mx-auto flex items-center justify-between py-4 px-6 bg-black border-b border-t border-stone-400 text-white z-10">
				{/* Left Side Logo */}
				<div>
					<Link to="/">
						<div className="text-xl font-medium">
							Matilda Hex
							<img
								src={Logo}
								alt="Matilda Hex Logo"
								className="inline-block h-6 w-6 ms-3"
							/>
						</div>
					</Link>
				</div>

				{/* Navigation Links */}
				<div className="hidden md:flex space-x-6 me-8">
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
					<button
						onClick={toggleCartDrawer}
						className="relative cursor-pointer">
						<FaBagShopping className="relative h-6 w-6 hover:text-red-500" />
						<span className="absolute top-3.5 right-3 bg-red-700 text-sm rounded-full px-2 py-0.2">
							6
						</span>
					</button>

					{/* Search */}
					<div className="overflow-hidden">
						<SearchBar />
					</div>

					{/* Hamburger Button */}
					<button
						onClick={toggleNavMenu}
						className="md:hidden cursor-pointer hover:text-red-500">
						<FaBars className="h-6 w-6" />
					</button>
				</div>
			</nav>
			<CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

			{/* Mobile Navigation */}
			<div
				className={`fixed  flex flex-col top-0 left-0 w-full sm:w-2/3 bg-black shadow-lg shadow-gray-600 text-white transform transition-transform duration-300 z-50 ${
					navOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<div className="flex justify-end p-4">
					<button onClick={toggleNavMenu}>
						<IoIosClose className="h-10 w-10 hover:text-red-500 cursor-pointer" />
					</button>
				</div>
				<div className="p-12 text-3xl">
					<nav className="space-y-6">
						<Link
							to="#"
							onClick={toggleNavMenu}
							className="block hover:text-red-800">
							Blessings
						</Link>
						<Link
							to="#"
							onClick={toggleNavMenu}
							className="block hover:text-red-800">
							Hexes
						</Link>
						<Link
							to="#"
							onClick={toggleNavMenu}
							className="block hover:text-red-800">
							Divination
						</Link>
						<Link
							to="#"
							onClick={toggleNavMenu}
							className="block hover:text-red-800">
							Courses
						</Link>
					</nav>
				</div>
			</div>
		</>
	);
};
export default Navbar;
