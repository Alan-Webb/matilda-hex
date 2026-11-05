import {useState} from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("Home");
	const [hoveredLink, setHoveredLink] = useState(null);

	const navLinks = ["Home", "Shop", "Collection", "Sale", "Deals"];

	return <div>Navbar</div>;
};

export default Navbar;
