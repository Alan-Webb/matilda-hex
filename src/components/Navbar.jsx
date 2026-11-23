import {useState} from "react";
import logo from "../assets/matty-hex-logo.webp";

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
					{/* LOGO */}
					<div className="flex space-x-3 text-white text-3xl font-bold tracking-tight uppercase">
						<p>Matilda Hex</p>
						<span className="pb-2">
							<img src={logo} alt="Matilda Hex Logo" width={36} />
						</span>
					</div>
					{/* DESKTOP NAVIGATION */}
					<div className="hidden md:flex items-center justify-center flex-1">
						<div className="flex gap-8 lg:gap-12 text-white">
							{navLinks.map((link) => (
								<a
									href="#"
									key={link}
									onClick={() => setActiveLink(link)}
									onMouseEnter={() => setHoveredLink(link)}
									onMouseLeave={() => setHoveredLink(null)}
									className={`relative text-xl font-medium transition-opacity hover:opacity-70
										${activeLink === link ? "opacity-100" : "opacity-80"}
										`}>
									{link}
									{(hoveredLink === link || activeLink) && (
										<span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full animate"></span>
									)}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
