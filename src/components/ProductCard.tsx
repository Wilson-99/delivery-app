import { useCartStore } from "../features/cart/cartStore";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ id, name, price, image }: Product) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded shadow flex flex-col font-serif">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h2 className="font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">Kz {price.toLocaleString()}</p>
      <button
        onClick={() => addToCart({ id, name, price, image })}
        className="mt-auto bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
