import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";
import { SearchX } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div
      className="
        mt-5
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <SearchX className="mx-auto h-12 w-12 text-gray-400" />

          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            No Products Found
          </h3>

          <p className="mt-2 text-gray-500">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
