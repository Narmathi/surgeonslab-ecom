import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Category */}
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
          {product.shortDescription}
        </p>

        {/* Speciality */}
        {product.speciality && (
          <div className="mt-4">
            <span className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700">
              {product.speciality}
            </span>
          </div>
        )}

        {/* Button */}
        <Link
          to={`/products/${product.id}`}
          className="mt-6 inline-flex items-center font-semibold text-sky-700 transition hover:text-sky-900"
        >
          View Details
          <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
