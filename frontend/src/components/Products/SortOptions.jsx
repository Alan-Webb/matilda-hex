import {useSearchParams} from "react-router-dom";

const SortOptions = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleSortChange(e) {
		const sortBy = e.target.value;
		searchParams.set("sortBy", sortBy);
		setSearchParams(searchParams);
	}

	return (
		<div class="flex items-center justify-end">
			<select
				id="sort"
				onChange={handleSortChange}
				value={searchParams.get("sortBy") || ""}
				class="bg-transparent border-b p-1 mb-4 mr-4 text-xl focus:outline-none focus:bg-black">
				<option value="">Default</option>
				<option value="priceAsc">Price: Low to High</option>
				<option value="priceDesc">Price: High to Low</option>
				<option value="popular">Popular</option>
			</select>
		</div>
	);
};

export default SortOptions;
