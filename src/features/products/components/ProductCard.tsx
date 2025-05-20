import { useCartStore } from "../../cart/store";
import { Product } from "../types";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-fit"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-bold mt-2">
          Kz {product.price.toLocaleString()}
        </p>
        <button
          className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
