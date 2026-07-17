import type { Product } from "@/types/product";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex min-h-[56px] flex-wrap content-start gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {product.category}
          </span>

          {product.speciality && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              {product.speciality}
            </span>
          )}
        </div>

        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {product.shortDescription}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="
    mt-auto
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-sky-600
    py-3
    text-sm
    font-medium
    text-white
    transition
    hover:bg-sky-800
  "
        >
          View Details
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
