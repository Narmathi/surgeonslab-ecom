import { generateProducts } from "@/data/generateMockProducts";
import type { Product } from "@/types/product";

const products: Product[] = generateProducts();

export const productService = {
  getFeaturedProducts(): Product[] {
    return products.slice(0, 3);
  },
};
