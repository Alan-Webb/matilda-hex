import spellsImage from "../../assets/harmony-of-heart.webp";
import coursesImage from "../../assets/foundations.webp";
import {Link} from "react-router-dom";

const CollectionSection = () => {
	return (
		<section className="bg-black text-white py-16 px-4 lg:px-0">
			<div className="container mx-auto flex flex-col md:flex-row gap-8">
				{/* Spells */}
				<div className="relative flex-1">
					<img
						src={spellsImage}
						alt="spells"
						className="w-full h-[43.75rem] object-cover"
					/>
					<div className="absolute bottom-8 left-8 bg-red-800 rounded-xl shadow-black shadow-lg bg-origin-padding-90 p-4 border border-black ">
						<h2 className="text-2xl font-bold mb-3">Spells & Incantations</h2>
						<Link
							to="/collections/all?collection=Spells"
							className="text-gray-300 underline hover:text-black">
							Shop now
						</Link>
					</div>
				</div>

				{/* Courses */}
				<div className="relative flex-1">
					<img
						src={coursesImage}
						alt="courses"
						className="w-full h-[43.75rem] object-cover"
					/>
					<div className="absolute bottom-8 left-8 bg-red-800 rounded-xl shadow-black shadow-lg bg-origin-padding-90 p-4 border border-black ">
						<h2 className="text-2xl font-bold mb-3">Witchcraft Courses</h2>
						<Link
							to="/collections/all?collection=Courses"
							className="text-gray-300 underline  hover:text-black">
							Shop now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CollectionSection;
