import {Link} from "react-router-dom";
import heroImg from "../../assets/bg-image-1.webp";

const Hero = () => {
	return (
		<section className="relative">
			<img
				src={heroImg}
				alt="Matilda Hex"
				className="w-full h-[25rem] md:h-[37.5rem] lg:h-[43.75rem] object-cover"
				loading="eager"
			/>
			<div className="absolute inset-4 flex items-center">
				<div className="text-stone-400 p-6">
					<h1 className="text-2xl md:text-4xl lg:text-6xl text-shadow font-bold tracking-tight uppercase mb-4">
						Wiccan Solutions
						<br /> for Modern Living
					</h1>
					<p className="text-md md:text-lg lg:text-xl tracking-tight  mb-6">
						Explore our spell kits and courses
						<br />
						with fast world wide shipping
					</p>
					<Link
						to="#"
						className="bg-red-800 text-white uppercase px-6 py-2 rounded-sm text-lg hover:bg-red-700">
						Shop Now
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Hero;
