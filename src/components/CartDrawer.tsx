
import { useCartDrawerStore } from "../features/cart/cartDrawerStore";
import { CartPreview } from "./CartPreview";

export function CartDrawer() {
  const { isOpen, closeDrawer } = useCartDrawerStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/50" onClick={closeDrawer}></div>

      <div className="absolute top-0 right-0 w-95 max-w-full h-full bg-white p-4 shadow-lg z-50 flex flex-col">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold font-serif">Carrinho</h2>
          <button
            onClick={closeDrawer}
            className="text-red-500 hover:text-red-700 cursor-pointer"
          >
            x
          </button>
        </div>
        <CartPreview />
      </div>
    </div>
  );
}
