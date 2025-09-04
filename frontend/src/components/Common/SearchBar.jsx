import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {IoIosClose} from "react-icons/io";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handleSearchToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("Search Term:", searchTerm);
		setIsOpen(false);
	};

	return (
		<div
			className={`flex items-center justify-center w-full transition-all duration-700 ${
				isOpen
					? "absolute top-0 left-0 w-full bg-black border-b h-17 z-50"
					: "w-auto"
			}`}>
			{isOpen ? (
				<form
					onSubmit={handleSearch}
					className="relative flex items-center justify-center w-full">
					<div className="relative w-1/2">
						<input
							type="text"
							name="search-products"
							placeholder="Search"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="rounded-xl bg-gray-100 text-black text-lg px-4 py-2 pl-2 pr-12 focus:outline-none w-full"
						/>
						{/* Search Icon */}
						<button
							type="submit"
							className="absolute right-3 top-2 cursor-pointer">
							<FaSearch className="h-6 w-6 text-black hover:text-red-800" />
						</button>
					</div>
					{/* Close Button */}
					<button type="button" className="absolute right-4 cursor-pointer ">
						<IoIosClose className="h-10 w-10 text-white hover:text-red-500" />
					</button>
				</form>
			) : (
				<button onClick={handleSearchToggle}>
					<FaSearch className="h-5 w-5 cursor-pointer hover:text-red-500" />
				</button>
			)}
		</div>
	);
};
export default SearchBar;
