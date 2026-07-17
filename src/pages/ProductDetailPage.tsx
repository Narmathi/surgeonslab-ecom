import { useParams } from "react-router-dom";
import { generateProducts } from "@/data/generateMockProducts";
import ProductHero from "@/components/productdetails/ProductHero";
import RelatedProducts from "@/components/productdetails/RelatedProducts";
import { useMemo } from "react";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const products = generateProducts();

  const product = useMemo(() => {
    return products.find((item) => item.id === id);
  }, [id, products]);

  if (!product) {
    return (
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <p>Product not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <ProductHero product={product} />
        <RelatedProducts currentProduct={product} products={products} />
      </div>
    </section>
  );
};

export default ProductDetailPage;
