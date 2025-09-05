import {IoIosClose} from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
	return (
		<div
			className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-black shadow-lg shadow-gray-600 text-white transform transition-transform duration-300 flex flex-col z-50 ${
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
				<h2 className="text-xl font-semiboldmb-4">Your Cart</h2>
				<CartContents />
			</div>
			{/* Checkout Button */}
			<div className="p-4 sticky bottom-0">
				<button className="w-full bg-red-800 py-3 rounded-lg text-2xl uppercase font-semibold hover:bg-red-700 transition duration-500 cursor-pointer">
					Checkout
				</button>
				<p className="text-sm tracking-tighter mt-2 text-center">
					Shipping, taxes and discount codes calculated at checkout
				</p>
			</div>
		</div>
	);
};
export default CartDrawer;
