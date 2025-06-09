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
    return (
      <p className="text-center text-gray-500 font-serif">Carrinho vazio!</p>
    );
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4">
  <ul>
    {items.map((item) => (
      <li
        key={item.id}
        className="flex items-center border-b py-3 gap-4"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />

        <div className="flex-1 wrap items-start">
          <div className="flex justify-between font-serif">
            <p className="font-semibold text-sm sm:text-base">{item.name}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-xl hover:text-red-700 cursor-pointer"
            >
              <BiTrash />
            </button>
          </div>

          <div className="flex justify-between text-right font-serif">
            <div className="flex items-center gap-0 mt-2 border-1 rounded-sm">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-1 bg-white-200 cursor-pointer"
              >
                −
              </button>
              <span className="min-w-[20px] text-center bg-gray-200">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-1 bg-white-200 cursor-pointer"
              >
                +
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Kz {(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        </div>
      </li>
    ))}
  </ul>

  <div className="pt-4">
    <p className="font-bold text-end font-serif">
      Total: <span className="text-green-600">Kz {total.toLocaleString()}</span>
    </p>
    <button
      onClick={() => useOrderModalStore.getState().openModal()}
      className="mt-2 bg-green-600 font-serif text-white px-4 py-2 rounded hover:bg-green-700 w-full cursor-pointer"
    >
      Finalizar Pedido
    </button>
  </div>
</div>

  );
}
