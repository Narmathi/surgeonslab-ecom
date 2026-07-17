import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  currentProduct: Product;
  products: Product[];
}

const RelatedProducts = ({
  currentProduct,
  products,
}: RelatedProductsProps) => {
  const relatedProducts = products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.category === currentProduct.category,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Related Products</h2>

        <p className="mt-2 text-gray-500">
          Explore similar medical simulation products.
        </p>
      </div>

      {/* Grid */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
