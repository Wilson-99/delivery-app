import { useCartDrawerStore } from "../features/cart/cartDrawerStore";
import { useCartStore } from "../features/cart/cartStore";
import { FaShoppingCart } from "react-icons/fa";

export function CartButton() {
  const { openDrawer, isOpen } = useCartDrawerStore();
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (isOpen) return null;

  return (
    <button
      onClick={openDrawer}
      className="fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center gap-2"
    >
      <FaShoppingCart />
      {totalItems > 0 && <span>{totalItems}</span>}
    </button>
  );
}
