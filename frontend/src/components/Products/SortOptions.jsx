const SortOptions = () => {
	return (
		<div class="flex items-center justify-end">
			<select
				id="sort"
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
