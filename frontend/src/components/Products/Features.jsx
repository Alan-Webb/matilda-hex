import {FaBagShopping} from "react-icons/fa6";
import {HiArrowPathRoundedSquare, HiOutlineCreditCard} from "react-icons/hi2";

const Features = () => {
	return (
		<section className="py-16 px-4 bg-red-800 text-white border-t">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				{/* Feature 1 */}
				<div className="flex flex-col items-center">
					<div className="p-4 rounded-full mb-4">
						<FaBagShopping className="text-4xl" />
					</div>
					<h4 className="text-2xl tracking-tighter mb-2 uppercase">
						Free International Shipping
					</h4>
					<p className="text-stone-300 text-xl tracking-tighter">
						On all orders over €100
					</p>
				</div>

				{/* Feature 2 */}
				<div className="flex flex-col items-center">
					<div className="p-4 rounded-full mb-4">
						<HiArrowPathRoundedSquare className="text-4xl" />
					</div>
					<h4 className="text-2xl tracking-tighter mb-2 uppercase">
						30 Day Return policy
					</h4>
					<p className="text-stone-300 text-xl tracking-tighter">
						Money back guarantee
					</p>
				</div>

				{/* Feature 3 */}
				<div className="flex flex-col items-center">
					<div className="p-4 rounded-full mb-4">
						<HiOutlineCreditCard className="text-4xl" />
					</div>
					<h4 className="text-2xl tracking-tighter mb-2 uppercase">
						Secure Checkout
					</h4>
					<p className="text-stone-300 text-xl tracking-tighter">
						100% secure checkout process
					</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
