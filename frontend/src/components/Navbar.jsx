import {NavLink} from "react-router-dom";
import {LINKS} from "../constants";

const Navbar = () => {
	// const NavLinks = [
	// 	{path: "/", title: "Home"},
	// 	{path: "/collection", title: "Collection"},
	// 	{path: "/testimonials", title: "Testimonials"},
	// 	{path: "/mailto:matildahex@gmail.com", title: "Contact"},
	// ];

	return (
		<nav className="flex gap-x-6 mt-6 text-2xl">
			{LINKS.map((link) => (
				<NavLink>
					<ul key={link.id}>
						<li className="list-none hover:text-red-800" to={link.path}>
							{link.title}
						</li>
					</ul>
				</NavLink>
			))}
		</nav>
	);
};
export default Navbar;
