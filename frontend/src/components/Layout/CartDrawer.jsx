import {IoIosClose} from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
	const navigate = useNavigate();

	function handleCheckout(){
		navigate("/checkout")
	}

	return (
		<div
			className={`fixed top-0 right-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-black shadow-lg shadow-gray-600 text-white transform transition-transform duration-300 flex flex-col z-50 ${
				drawerOpen ? "translate-x-0" : "translate-x-full"
			}`}>
			{/* Close Button */}
			<div className="flex justify-end p-4">
				<button onClick={toggleCartDrawer} className="cursor-pointer">
					<IoIosClose className="h-10 w-10 text-white hover:text-red-500" />
				</button>
			</div>
			{/* Cart Content with Scrollable Area */}
			<div className="flex-grow p-4 overflow-y-auto">
				<h2 className="text-3xl text-center font-semibold mb-4">Your Cart</h2>
				<CartContents />
			</div>
			{/* Checkout Button */}
			<div className="flex flex-col items-center p-4 sticky bottom-0">
				<button
				onClick={handleCheckout}
				className="w-1/2 bg-red-800 py-3 mb-4 rounded-lg text-2xl uppercase font-semibold hover:bg-red-700 transition duration-500 cursor-pointer">
					Checkout
				</button>
				<p className="text-sm tracking-tighter mt-2 text-center uppercase">
					Shipping, taxes and discount codes calculated at checkout
				</p>
			</div>
		</div>
	);
};
export default CartDrawer;
