import {Link, NavLink, useNavigate} from "react-router-dom";
import Logo from "/src/assets/matty-hex-logo.webp";
import {FaUser} from "react-icons/fa6";
import {AiFillProduct} from "react-icons/ai";
import {FaClipboard, FaSignOutAlt, FaStoreAlt} from "react-icons/fa";

const AdminSidebar = () => {
	const navigate = useNavigate();

	function handleLogout() {
		navigate("/");
	}

	return (
		<div className="p-6">
			<div className="mb-6 pb-4 border-b border-stone-300">
				<Link to="/admin" className="text-2xl font-medium">
					Matilda Hex
					<img
						src={Logo}
						alt="Matilda Hex Logo"
						className="inline-block h-6 w-6 ms-3"
					/>
				</Link>
			</div>
			<h2 className="text-xl font-medium mb-6 text-center uppercase">
				Admin Dashboard
			</h2>
			<nav className="flex flex-col space-y-2">
				{/* Users NavLink */}
				<NavLink
					to="/admin/users"
					className={({isActive}) =>
						isActive
							? "bg-red-800 text-white py-3 px-4 rounded-xl flex items-center space-x-2"
							: "text-stone-300 hover:bg-stone-600 hover:text-white py-3 px-4 rounded-xl flex items-center space-x-2"
					}>
					<FaUser />
					<span className="uppercase text-lg ms-3">Users</span>
				</NavLink>
				{/* Products NavLink */}
				<NavLink
					to="/admin/products"
					className={({isActive}) =>
						isActive
							? "bg-red-800 text-white py-3 px-4 rounded-xl flex items-center space-x-2"
							: "text-stone-300 hover:bg-stone-600 hover:text-white py-3 px-4 rounded-xl flex items-center space-x-2"
					}>
					<AiFillProduct />
					<span className="uppercase text-lg ms-3">Products</span>
				</NavLink>
				{/* Orders NavLink */}
				<NavLink
					to="/admin/orders"
					className={({isActive}) =>
						isActive
							? "bg-red-800 text-white py-3 px-4 rounded-xl flex items-center space-x-2"
							: "text-stone-300 hover:bg-stone-600 hover:text-white py-3 px-4 rounded-xl flex items-center space-x-2"
					}>
					<FaClipboard />
					<span className="uppercase text-lg ms-3">Orders</span>
				</NavLink>
				{/* Shop NavLink */}
				<NavLink
					to="/"
					className={({isActive}) =>
						isActive
							? "bg-red-800 text-white py-3 px-4 rounded-xl flex items-center space-x-2"
							: "text-stone-300 hover:bg-stone-600 hover:text-white py-3 px-4 rounded-xl flex items-center space-x-2"
					}>
					<FaStoreAlt />
					<span className="uppercase text-lg ms-3">Shop</span>
				</NavLink>
			</nav>
			{/* Logout Button */}
			<div className="mt-6">
				<button
					onClick={handleLogout}
					className="bg-red-800 w-full border border-stone-300 rounded-xl flex items-center justify-center py-2 px-4 gap-3 text-2xl uppercase cursor-pointer hover:bg-red-700">
					<FaSignOutAlt />
					Logout
				</button>
			</div>
		</div>
	);
};

export default AdminSidebar;
