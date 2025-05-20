import { useCartStore } from "../store";
import { BiTrash } from "react-icons/bi";

export function CartPreview() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  if (items.length === 0) return <p className="mt-4">Carrinho vazio!</p>;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-4 pt-4">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="mb-2 flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Kz {(item.price * item.quantity).toLocaleString()}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline text-2xl"
              >
                <BiTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Total: Kz {total.toLocaleString()}</p>
      <button
        onClick={clearCart}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Limpar carrinho
      </button>
    </div>
  );
}
