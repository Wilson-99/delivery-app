import { products } from "../features/products/data/products";
import { ProductCard } from "../features/products/components/ProductCard";
import { CartButton } from "../features/cart/components/CartButtom";
import { CartModal } from "../features/cart/components/CartModal";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Produtos disponíveis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <CartButton />
      <CartModal />
    </div>
  );
}
