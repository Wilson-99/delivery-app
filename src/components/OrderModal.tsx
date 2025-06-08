import { useState } from "react";
import { useOrderModalStore } from "../features/order/orderModalStore";
import { useCartStore } from "../features/cart/cartStore";

export function OrderModal() {
  const { isOpen, closeModal } = useOrderModalStore();
  const { items, clearCart } = useCartStore();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pedido enviado:", { name, phone, items });
    setSuccess(true);
    clearCart();
    setTimeout(() => {
      setSuccess(false);
      closeModal();
      setName("");
      setPhone("");
      window.location.reload();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-serif">
      <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>

      <div className="bg-white rounded shadow-lg z-50 p-6 w-96 max-w-full relative">
        <h2 className="text-xl font-bold mb-4">Finalizar Pedido</h2>

        {success ? (
          <p className="text-green-600">Pedido enviado com sucesso!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Enviar Pedido
            </button>
          </form>
        )}

        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
