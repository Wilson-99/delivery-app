import { useEffect } from "react";
import { useUIStore } from "../store";
import { CartPreview } from "./CartPreview";

export function CartModal() {
  const { isCartOpen, closeCart } = useUIStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/40" onClick={closeCart}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Carrinho</h2>
            <button
              onClick={closeCart}
              className="text-red-500 hover:text-red-800 text-lg"
              aria-label="Fechar carrinho"
            >
              ✕
            </button>
          </div>
          <div className="overflow-y-auto flex-1">
            <CartPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
