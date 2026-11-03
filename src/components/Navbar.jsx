import {useState} from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("Home");

	return <div>Navbar</div>;
};

export default Navbar;
