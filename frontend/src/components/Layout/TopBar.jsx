import {TbBrandMeta} from "react-icons/tb";

const TopBar = () => {
	return (
		<div className="bg-red-600 text-white">
			<div className="container mx-auto">
				<div>
					<a href="#" className="hover:text-gray-300">
						<TbBrandMeta className="h-5 w-5" />
					</a>
				</div>
			</div>
		</div>
	);
};
export default TopBar;
