import Logo from "../assets/matty-hex-logo.webp";

const Navbar = () => {
	return (
		<div>
			<nav className="border-b">
				<a href="#">
					<img src={Logo} alt="Matilda Hex Logo" className="w-[4rem] p-2" />
				</a>
			</nav>
		</div>
	);
};
export default Navbar;
