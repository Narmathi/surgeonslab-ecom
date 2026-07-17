import { Filter, FolderOpen } from "lucide-react";

interface SidebarCategory {
  name: string;
  count: number;
}

interface ProductSidebarProps {
  categories: SidebarCategory[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
}

const ProductSidebar = ({
  categories,
  selectedCategories,
  onCategoryChange,
  onClearFilters,
}: ProductSidebarProps) => {
  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        </div>

        <p className="mt-1 text-sm text-gray-500">Refine your product search</p>
      </div>

      <hr className="mb-6 border-gray-200" />

      {/* Categories */}

      <div>
        <div className="mb-4 flex items-center gap-2">
          <FolderOpen className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-gray-800">Categories</h3>
        </div>

        <div className="space-y-2">
          {categories.map((category) => {
            const isSelected =
              category.name === "All Products"
                ? selectedCategories.length === 0
                : selectedCategories.includes(category.name);

            return (
              <label
                key={category.name}
                className={`
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  rounded-xl
                  border
                  p-3
                  transition-all
                  duration-300

                  ${
                    isSelected
                      ? "border-blue-600 bg-blue-50"
                      : "border-transparent hover:bg-blue-50"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onCategoryChange(category.name)}
                    className="h-4 w-4 rounded accent-blue-600"
                  />

                  <span
                    className={`${
                      isSelected ? "font-medium text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {category.name}
                  </span>
                </div>

                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {category.count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <button
        onClick={onClearFilters}
        className="
          w-full
          rounded-xl
          border
          border-sky-600
          py-3
          font-medium
          text-sky-600
          transition-all
          duration-300
          hover:bg-sky-800
          hover:text-white
          active:scale-95
        "
      >
        Clear Filters
      </button>
    </aside>
  );
};

export default ProductSidebar;
