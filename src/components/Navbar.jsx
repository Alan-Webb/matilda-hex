import {useState} from "react";
import Logo from "../assets/matty-hex-logo.webp";
import {LINKS} from "../constants/index.jsx";
import {FaSearch, FaTimes, FaBars} from "react-icons/fa";
import {GoHeartFill} from "react-icons/go";
import {RiShoppingBag4Line} from "react-icons/ri";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLinkClick = (e, href) => {
		e.preventDefault();
		const targetElement = document.querySelector(href);
		if (targetElement) {
			const offset = -85;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + scrollY + offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="flex items-center justify-between px-12 py-4 border-b">
			{/* Logo */}
			<div>
				<a href="#" className="flex">
					<img
						src={Logo}
						alt="Matilda Hex Logo"
						className="flex w-[4rem] p-2"
					/>
					<span className="text-2xl uppercase pt-4 ps-3">Matilda Hex</span>
				</a>
			</div>
			{/* Desktop Menu */}
			<div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
				<div className="flex items-center justify-between gap-6">
					<div>
						<ul className="flex items-center gap-4">
							{LINKS.map((item, index) => (
								<li key={index}>
									<a
										href={item.href}
										onClick={(e) => handleLinkClick(e, item.href)}
										className="text-sm hover:text-pink-400">
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* Nav Actions */}
				<div className="flex items-center gap-x-5">
					{/* Search Bar */}
					<div className="bg-white rounded-full py-1 px-3 ps-4 m-2 text-black text-[1.4rem]">
						<input
							type="text"
							name="search"
							id="search"
							placeholder="Search..."
							autoComplete="off"
						/>
						<button className="w-[2rem] pt-2 cursor-pointer">
							<FaSearch />
						</button>
					</div>
					{/* Icons */}
					<button className="relative text-[2rem] text-red-700 cursor-pointer ">
						<GoHeartFill />
						<span className="flex justify-center items-center absolute top-5 right-4 bg-red-700 text-white text-[0.875rem] w-5 h-5 rounded-full border border-slate-500">
							1
						</span>
					</button>
					<button className="relative text-[2rem] text-red-700 cursor-pointer">
						<RiShoppingBag4Line />
						<span className="flex justify-center items-center absolute top-5 right-4 bg-red-700 text-white text-[0.875rem] w-5 h-5 rounded-full border border-slate-500">
							3
						</span>
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			<div className="backdrop-blur-md lg:hidden">
				<div className="flex items-center justify-center">
					<div className="flex items-center">
						<button
							onClick={toggleMobileMenu}
							className="focus:outline-none lg:hidden">
							{isMobileMenuOpen ? (
								<FaTimes className="m-2 h-6 w-5 cursor-pointer" />
							) : (
								<FaBars className="m-2 h-6 w-5 cursor-pointer" />
							)}
						</button>
					</div>
				</div>
				{isMobileMenuOpen && (
					<ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
						{LINKS.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className="block w-full text-lg ps-16 pb-4 hover:text-pink-400"
									onClick={(e) => handleLinkClick(e, item.href)}>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
