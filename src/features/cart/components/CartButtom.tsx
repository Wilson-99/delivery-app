import { FaShoppingCart } from "react-icons/fa";
import { useCartStore, useUIStore } from "../store";

export function CartButton() {
  const { items } = useCartStore();
  const { isCartOpen, openCart } = useUIStore();

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  if (isCartOpen) return null; 

  return (
    <button
      onClick={openCart}
      className="fixed top-4 right-4 z-50 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 shadow-md"
      aria-label="Abrir carrinho"
    >
      <div className="relative">
        <FaShoppingCart size={24} />
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {totalQuantity}
          </span>
        )}
      </div>
    </button>
  );
}
