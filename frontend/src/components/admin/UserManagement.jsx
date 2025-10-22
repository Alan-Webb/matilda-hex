import {useState} from "react";

const UserManagement = () => {
	const users = [
		{
			name: "Barry Allen",
			email: "allenbarry@example.com",
			role: "admin",
		},
	];

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		role: "customer", // Default role
	});

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 left-28 md:left-72  xl:left-128">
			<h2 className="text-2xl font-bold mb-4">User Management</h2>
			{/* Add New User Form */}
			<div className="p-6 mb-6">
				<h3 className="text-lg font-bold mb-4">Add New User</h3>
			</div>
		</div>
	);
};

export default UserManagement;
