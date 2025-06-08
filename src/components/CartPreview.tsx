import { useCartStore } from "../features/cart/cartStore";
import { BiTrash } from "react-icons/bi";
import { useOrderModalStore } from "../features/order/orderModalStore";

export function CartPreview() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    //clearCart,
  } = useCartStore();

  if (items.length === 0) {
    return <p className="text-center text-gray-500">Carrinho vazio!</p>;
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-start border-b pb-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="font-serif">
              <p className="font-semibold">{item.name}</p>
              <div className="flex items-center mt-1 gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right font-serif">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-xl hover:text-red-700"
              >
                <BiTrash />
              </button>
              <p className="text-sm text-gray-600">
                Kz {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <p className="font-bold text-end font-serif">
          Total:{" "}
          <span className="text-green-600">Kz {total.toLocaleString()}</span>
        </p>
        <button
          onClick={() => useOrderModalStore.getState().openModal()}
          className="mt-2 bg-green-600 font-serif text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
