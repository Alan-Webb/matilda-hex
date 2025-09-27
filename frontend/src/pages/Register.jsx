import {useState} from "react";
import {Link} from "react-router-dom";
import register from "../assets/divination.webp";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log("User Registered:", {name, email, password});
	}

	return (
		<div className="flex bg-stone-600">
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 mt-10 md:mt-2">
				<form
					onSubmit={handleSubmit}
					className="w-full max-w-md bg-black text-white p-8 rounded-lg border shadow-sm">
					<div className="flex justify-center mb-2">
						<h2 className="text-xl font-medium">Matilda Hex</h2>
					</div>
					<h2 className="text-2xl font-bold text-center mb-6">Blessed Be!</h2>
					<p className="text-center mb-4">
						Enter username and password to Register
					</p>
					<div className="mb-4">
						<label className="block text-sm font-semibold mb-2">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full p-2 border rounded"
							placeholder="Enter your name"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-semibold mb-2">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full p-2 border rounded"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-semibold mb-2">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-2 border rounded"
							placeholder="Enter your password"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-red-800 text-white uppercase p-2 rounded-xl font-semibold hover:bg-red-600 transition duration-75 cursor-pointer">
						Sign Up
					</button>
					<div>
						<p className="inline-block mt-6 text-center text-md p-4 ps-20">
							Already have an account?
						</p>
						<Link
							to="/login"
							className="inline-block text-stone-300 hover:text-red-600">
							Login
						</Link>
					</div>
				</form>
			</div>

			{/* Right Side Image */}
			<div className="hidden md:block w-1/2 bg-stone-600">
				<div className="h-full flex flex-col justify-center items-center">
					<img
						src={register}
						alt="Register Account"
						className="h-[46.875rem] w-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Register;
