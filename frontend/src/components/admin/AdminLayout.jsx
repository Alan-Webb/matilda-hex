import {useState} from "react";

const AdminLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	function toggleSidebar() {
		setIsSidebarOpen(!isSidebarOpen);
	}

	return <div>AdminLayout</div>;
};

export default AdminLayout;
