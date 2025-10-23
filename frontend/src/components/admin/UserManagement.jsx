import {useState} from "react";

const UserManagement = () => {
	const users = [
		{
			_id: 2236,
			name: "Barry Allen",
			email: "allenbarry@example.com",
			role: "admin",
		},
	];

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		role: "customer",
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
		setFormData({
			name: "",
			email: "",
			password: "",
			role: "customer",
		});
	}

	function handleRoleChange(userId, newRole) {
		console.log({id: userId, role: newRole});
	}

	function handleDeleteUser(userId) {
		if (window.confirm("Are you sure you want to delete this user?")) {
			console.log("Deleting user ID", userId);
		}
	}

	return (
		<div className="max-w-8xl mx-auto p-6 absolute top-12 sm:left-28 md:left-72 xl:left-128">
			<h2 className="text-2xl font-bold mb-6">User Management</h2>
			{/* Add New User Form */}
			<div className="p-6 mb-6 bg-stone-700 rounded-xl w-[27rem] md:w-[32rem] lg:w-[38rem] xl:w-[44rem]">
				<h3 className="text-lg font-bold mb-4">Add New User</h3>
				<form onSubmit={handleSubmit}>
					{/* Name */}
					<div className="mb-4">
						<label className="block text-stone-300 mb-2">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Enter name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-2 border border-stone-300 rounded-lg"
							required
						/>
					</div>
					{/* Email */}
					<div className="mb-4">
						<label className="block text-stone-300 mb-2">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-2 border border-stone-300 rounded-lg"
							required
						/>
					</div>
					{/* Password */}
					<div className="mb-4">
						<label className="block text-stone-300 mb-2">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Enter password"
							value={formData.password}
							onChange={handleChange}
							className="w-full p-2 border border-stone-300 rounded-lg"
							required
						/>
					</div>
					{/* Role */}
					<div className="mb-4">
						<label className="block text-stone-300 mb-2">Role</label>
						<select
							name="role"
							value={formData.role}
							onChange={handleChange}
							className="w-full p-2 border rounded-lg bg-transparent focus:outline-none focus:bg-stone-600">
							<option value="customer">Customer</option>
							<option value="admin">Admin</option>
						</select>
					</div>
					<button
						type="submit"
						className="bg-red-800 w-full text-2xl uppercase p-2 rounded-xl my-2 border cursor-pointer hover:bg-red-700">
						Add User
					</button>
				</form>
			</div>

			{/* User List Management */}
			<div className="overflow-x-auto rounded-lg shadow-sm shadow-stone-300 ms-[-2.25rem] md:ms-[0rem]">
				<table className="min-w-full text-left">
					<thead className="bg-stone-700 text-xs uppercase">
						<tr>
							<th className="py-3 px-4">Name</th>
							<th className="py-3 px-4">Email</th>
							<th className="py-3 px-4">Role</th>
							<th className="py-3 px-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id} className="border-b hover:bg-stone-600">
								<td className="p-4 font-medium text-stone-300 whitespace-nowrap">
									{user.name}
								</td>
								<td className="p-4">{user.email}</td>
								<td className="p-4">
									<select
										value={user.role}
										onChange={(e) => handleRoleChange(user._id, e.target.value)}
										className="p-2 border rounded bg-transparent focus:outline-none focus:bg-stone-600">
										<option value="customer">Customer</option>
										<option value="admin">Admin</option>
									</select>
								</td>
								<td className="p-4">
									<button
										onClick={() => handleDeleteUser(user._id)}
										className="bg-red-800 p-1 rounded-xl border border-stone-300 hover:bg-red-700 cursor-pointer">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserManagement;
