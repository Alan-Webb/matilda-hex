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
		<header className="bg-black text-white">
			<div>
				{/* Logo left side */}
				<Link to={"/"}>
					<div className="text-3xl p-4">
						Matilda Hex
						<img
							src={Logo}
							alt="Matilda Hex Logo"
							className="inline-block h-8 ms-4"
						/>
					</div>
				</Link>
				{/* Navbar */}
				<div>
					<Navbar />
				</div>
				{/* Buttons Right Side */}
				<div>
					{/* Menu Toggle */}
					<FaBars />
					{/* Search Icons */}
					<FaSearch />
					{/* Cart */}
					<Link to={"/cart"}>
						<FaShoppingBasket />
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
