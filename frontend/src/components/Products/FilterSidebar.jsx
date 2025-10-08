import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {IoIosClose} from "react-icons/io";

const FilterSidebar = ({toggleSidebar}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
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

	function handleFilterChange(e) {
		const {name, value, checked, type} = e.target;
		let newFilters = {...filters};

		if (type === "checkbox") {
			if (checked) {
				newFilters[name] = [...(newFilters[name] || []), value];
			} else {
				newFilters[name] = newFilters[name].filter((item) => item !== value);
			}
		} else {
			newFilters[name] = value;
		}
		setFilters(newFilters);
		// console.log(newFilters);
		updateURLParams(newFilters);
	}

	function updateURLParams(newFilters) {
		const params = new URLSearchParams();
		Object.keys(newFilters).forEach((key) => {
			if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
				params.append(key, newFilters[key].join(","));
			} else if (newFilters[key]) {
				params.append(key, newFilters[key]);
			}
		});
		setSearchParams(params);
		navigate(`?${params.toString()}`);
	}

	function handlePriceChange(e) {
		const newPrice = e.target.value;
		setPriceRange([0], newPrice);
		const newFilters = {...filters, minPrice: 0, maxPrice: newPrice};
		setFilters(filters);
		updateURLParams(newFilters);
	}

	return (
		<div className="p-4">
			{/* Close Button */}
			<div className="flex justify-between p-4 relative">
				<h3 className="text-2xl font-semibold uppercase mb-6">Filters</h3>
				<button
					onClick={toggleSidebar}
					className="absolute end-2 top-2.5 cursor-pointer">
					<IoIosClose className="h-10 w-10 text-white hover:text-red-500" />
				</button>
			</div>

			{/* Category Filter */}
			<div className="mb-6">
				<label className="block text-xl font-medium mb-2 uppercase">
					Category
				</label>
				{categories.map((category) => (
					<div key={category} className="flex items-center mb-1 text-lg">
						<input
							type="radio"
							name="category"
							value={category}
							onChange={handleFilterChange}
							checked={filters.category === category}
							className="mr-2 h-4 w-4 text-stone-300 accent-red-800 cursor-pointer"
						/>
						<span>{category}</span>
					</div>
				))}
			</div>

			{/* Invocation Type Filter */}
			<div className="mb-6">
				<label className="block text-xl font-medium mb-2 uppercase">
					Invocation Type
				</label>
				{invocationType.map((type) => (
					<div key={type} className="flex items-center mb-1 text-lg">
						<input
							type="checkbox"
							name="category"
							value={type}
							onChange={handleFilterChange}
							checked={filters.invocationType === invocationType}
							className="mr-2 h-4 w-4 text-stone-300 accent-red-800 cursor-pointer"
						/>
						<span>{type}</span>
					</div>
				))}
			</div>

			{/* Expertise Level Filter */}
			<div className="mb-6">
				<label className="block text-xl font-medium mb-2 uppercase">
					Expertise Level
				</label>
				{expertiseLevel.map((level) => (
					<div key={level} className="flex items-center mb-1 text-lg">
						<input
							type="checkbox"
							name="category"
							value={level}
							onChange={handleFilterChange}
							checked={filters.expertiseLevel === expertiseLevel}
							className="mr-2 h-4 w-4 text-stone-300 accent-red-800 cursor-pointer"
						/>
						<span>{level}</span>
					</div>
				))}
			</div>

			{/* Price Range Filter */}
			<div className="mb-8">
				<label className="block text-xl font-medium mb-2 uppercase">
					Price Range
				</label>
				<input
					type="range"
					name="price-range"
					min={0}
					max={625}
					value={priceRange[1]}
					onChange={handlePriceChange}
					className="w-full h-2 bg-stone-600 rounded-lg appearance-none cursor-pointer"
				/>
				<div className="flex justify-between text-stone-300 mt-2">
					<span>€0</span>
					<span>€{priceRange[1]}</span>
				</div>
			</div>
		</div>
	);
};

export default FilterSidebar;
