import type { Product } from "@/types/product";
import {
  ArrowLeft,
  Download,
  Mail,
  ShieldCheck,
  PackageCheck,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProductHeroProps {
  product: Product;
}

const ProductHero = ({ product }: ProductHeroProps) => {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm lg:p-10">
      {/* Back Button */}

      <Link
        to="/products"
        className="mb-8 inline-flex items-center gap-2 rounded-lg text-gray-600 transition hover:text-sky-700"
      >
        <ArrowLeft size={18} />
        <span className="font-medium">Back to Products</span>
      </Link>

      {/* Hero */}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left Side - Image */}

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side */}

        <div className="flex flex-col">
          {/* Badges */}

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              {product.category}
            </span>

            {product.speciality && (
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                {product.speciality}
              </span>
            )}
          </div>

          {/* Title */}

          <h1 className="mt-6 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">
            {product.name}
          </h1>

          {/* Description */}

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Quick Highlights */}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-4">
              <ShieldCheck className="mb-3 text-sky-600" />

              <p className="text-sm text-gray-500">Material</p>

              <p className="mt-1 font-semibold">
                {product.specifications.Material}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <PackageCheck className="mb-3 text-green-600" />

              <p className="text-sm text-gray-500">Warranty</p>

              <p className="mt-1 font-semibold">
                {product.specifications.Warranty}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <Factory className="mb-3 text-orange-600" />

              <p className="text-sm text-gray-500">Manufacturer</p>

              <p className="mt-1 font-semibold">
                {product.specifications.Manufacturer}
              </p>
            </div>
          </div>

          

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-sky-600
                px-8
                py-4
                font-medium
                text-white
                transition
                hover:bg-sky-700
              "
            >
              <Mail size={20} />
              Contact Sales
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-300
                bg-white
                px-8
                py-4
                font-medium
                transition
                hover:border-sky-600
                hover:text-sky-600
              "
            >
              <Download size={20} />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;