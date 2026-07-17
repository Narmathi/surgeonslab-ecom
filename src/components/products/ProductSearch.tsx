interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ProductSearch = ({ searchTerm, onSearchChange }: ProductSearchProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="flex-1
            rounded-md
            border
            border-gray-300
            px-4
            py-2
            outline-none
            focus:border-sky-600
            focus:ring-2
            focus:ring-sky-100"
        />

        {/* <button className="rounded-md bg-sky-700 px-6 py-2 text-white transition hover:bg-sky-800">
          Search
        </button> */}
      </div>
    </div>
  );
};

export default ProductSearch;
