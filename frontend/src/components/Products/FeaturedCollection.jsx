import {Link} from "react-router-dom";
import featured from "../../assets/featured.webp";

const Featured = () => {
	return (
		<section className="bg-black text-white py-16 px-4 lg:px-0">
			<div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-stone-700 rounded-3xl">
				{/* Left Content */}
				<div className="lg:w-1/2 p-8 text-center lg:text-left">
					<h2 className="text-lg lg:text-2xl font-semibold mb-2">
						Incantations for every occasion
					</h2>
					<h2 className="text-4xl lg:text-5xl font-bold mb-2">
						Wiccan solutions for everyday life
					</h2>
					<p className="text-lg lg:text-2xl mb-8">
						Browse our collection of spells and incantations to find the best
						fit for you.
					</p>
					<Link
						to="/collections/all"
						className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
						Shop Now
					</Link>
				</div>

				{/* Right Content */}
				<div className="lg:w-1/2">
					<img
						src={featured}
						alt="Featured Collection"
						className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default Featured;
