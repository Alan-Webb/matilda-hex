import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const FilterSidebar = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filters, setFilters] = useState({
		category: "",
		invocationType: "",
		expertiseLevel: "",
		minPrice: 0,
		maxPrice: 625,
	});

	const categories = ["Spells", "Courses"];
	const invocationType = ["Blessings", "Hexes", "Divination"];
	const expertiseLevel = ["Beginner", "Intermediate", "Expert"];
	const [priceRange, setPriceRange] = useState([0, 625]);

	useEffect(() => {
		const params = Object.fromEntries([...searchParams]);

		setFilters({
			category: params.category || "",
			invocationType: params.invocationType || "",
			expertiseLevel: params.expertiseLevel || "",
			minPrice: params.minPrice || 0,
			maxPrice: params.maxPrice || 625,
		});
		setPriceRange([0, params.maxPrice || 625]);
	}, [searchParams]);

	return (
		<div className="p-4">
			<h3 className="text-xl font-medium mb-4">some text</h3>
		</div>
	);
};

export default FilterSidebar;
