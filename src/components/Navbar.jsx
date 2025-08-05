import Logo from "../assets/matty-hex-logo.webp";
import {FaSearch} from "react-icons/fa";
import {GoHeartFill} from "react-icons/go";
import {RiShoppingBag4Line} from "react-icons/ri";

const Navbar = () => {
	return (
		<nav className="border-b flex items-center justify-between px-12 py-4">
			{/* Logo */}
			<a href="#">
				<img src={Logo} alt="Matilda Hex Logo" className="flex w-[4rem] p-2" />
			</a>
			{/* Nav Actions */}
			<div className="flex items-center gap-x-5">
				{/* Search Bar */}
				<div>
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
						autoComplete="off"
						className="bg-white rounded-xl p-2 m-2 text-black text-[1.2rem]"
					/>
					<button>
						<FaSearch className="w-[1.5rem] me-4" />
					</button>
				</div>
				{/* Icons */}
				<button className="text-[1.7rem] text-red-700">
					<GoHeartFill />
				</button>
				<button className="text-[1.7rem] text-red-700">
					<RiShoppingBag4Line />
				</button>
			</div>
		</nav>
	);
};
export default Navbar;
