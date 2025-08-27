import {NavLink} from "react-router-dom";

const Navbar = () => {
	const NavLinks = [
		{path: "/", title: "Home"},
		{path: "/collection", title: "Collection"},
		{path: "/testimonials", title: "Testimonials"},
		{path: "/mailto:matildahex@gmail.com", title: "Contact"},
	];

	return (
		<nav className="flex gap-x-6 mt-6 text-2xl">
			{NavLinks.map((link) => (
				<NavLink key={link.title} to={link.path}>
					{link.title}
				</NavLink>
			))}
		</nav>
	);
};
export default Navbar;
