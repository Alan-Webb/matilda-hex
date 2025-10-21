import {useState} from "react";
import {FaBars} from "react-icons/fa6";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	function toggleSidebar() {
		setIsSidebarOpen(!isSidebarOpen);
	}

	return (
		<div className="bg-black text-white min-h-screen flex flex-col md:flex-col relative">
			{/* Mobile Toggle Button */}
			<div className="flex md:hidden p-4 bg-stone-700 z-20">
				<button onClick={toggleSidebar}>
					<FaBars size={24} className="cursor-pointer" />
				</button>
				<h1 className="ml-4 text-xl font-medium uppercase">Admin Dashboard</h1>
			</div>

			{/* Overlay for Mobile Sidebar */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 z-10 bg-stone-700 bg-opacity-50 md:hidden"
					onClick={toggleSidebar}></div>
			)}

			{/* Sidebar */}
			<div
				className={`bg-stone-700 w-64 min-h-screen text-white absolute md:relative transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
				{/* Sidebar Component */}
				<AdminSidebar />
			</div>
		</div>
	);
};

export default AdminLayout;
