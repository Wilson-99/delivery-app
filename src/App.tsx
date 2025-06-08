import { CartButton } from "./components/CartButton";
import { CartDrawer } from "./components/CartDrawer";
import { OrderModal } from "./components/OrderModal";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 p-4">
      <Home />

      <CartButton />
      <CartDrawer />
      <OrderModal />
    </div>
  );
}

export default App;
