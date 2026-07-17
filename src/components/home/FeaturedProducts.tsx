import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProductCard from "../common/ProductCard";
import { productService } from "@/services/productService";

const FeaturedProducts = () => {
  const featuredProducts = productService.getFeaturedProducts();

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Featured Products
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Explore Our Medical Simulation Solutions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Discover our innovative surgical simulation products designed for
            hospitals, universities, and healthcare training centers.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center rounded-lg bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
