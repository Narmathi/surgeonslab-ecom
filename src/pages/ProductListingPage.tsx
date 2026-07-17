import ProductSearch from "@/components/products/ProductSearch";
import ProductSidebar from "@/components/products/ProductSidebar";
import { generateProducts } from "@/data/generateMockProducts";
import ProductGrid from "@/components/products/ProductGrid";
import { useMemo, useState, useEffect, useRef } from "react";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import Pagination from "@/components/products/Pagination";

const ProductListingPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const products = useMemo(() => generateProducts(), []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsRef = useRef<HTMLDivElement>(null);

  // =============================== Pagination logic =====================================
  const PRODUCTS_PER_PAGE = 9;
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  // =============================== Pagination logic =====================================

  const sidebarCategories = [
    {
      name: "All Products",
      count: products.length,
    },

    ...PRODUCT_CATEGORIES.map((category) => ({
      name: category,
      count: products.filter((product) => product.category === category).length,
    })),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search Filter
      const matchesSearch =
        searchTerm.trim() === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Category Filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategories]);

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleCategoryChange = (category: string) => {
    if (category === "All Products") {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    productsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Product Catalog
              </h1>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                100+ Products
              </span>
            </div>

            <p className="mt-2 text-gray-500">
              Medical simulation products & training solutions
            </p>
          </div>

          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            Featured Collection
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <ProductSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              onClearFilters={clearFilters}
              categories={sidebarCategories}
            />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <ProductSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {isLoading ? (
              <ProductGridSkeleton />
            ) : (
              <div ref={productsRef}>
                <ProductGrid products={paginatedProducts} />
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalProducts={filteredProducts.length}
              productsPerPage={PRODUCTS_PER_PAGE}
              onPageChange={handlePageChange}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductListingPage;
