import {NavLink} from "react-router-dom";
import { NAV_LINKS } from "../constants";

const Navbar = () => {
	
	return (
		<nav className="flex gap-x-6 mt-6 text-2xl">
			{NAV_LINKS.map((link) => (
				<NavLink
					key={link.title}
					className="list-none hover:text-red-500"
					to={link.path}>
					{link.title}
				</NavLink>
			))}
		</nav>
	);
};
export default Navbar;
