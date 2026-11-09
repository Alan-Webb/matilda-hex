import {useState} from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("Home");
	const [hoveredLink, setHoveredLink] = useState(null);

	const navLinks = ["Home", "Shop", "Collection", "Sale", "Deals"];

	return (
		<nav
			className="relative z-50 bg-black border-b border-white"
			data-aos="fade-down">
			<div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
				<div className="flex items-center justify-between">
					<div className="text-white text-2xl font-bold">
						Matilda <span>Hex</span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
