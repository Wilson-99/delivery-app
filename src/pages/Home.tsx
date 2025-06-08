import { ProductCard } from "../components/ProductCard";
import { products } from "../utils/products";

export function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 font-serif">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
