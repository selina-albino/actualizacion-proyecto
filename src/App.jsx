import { useState } from "react";
import CardsReloj from "./components/cardsReloj";
import relojImg from "./assets/reloj.png";

function App() {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  return (
    <div className="min-h-screen bg-[#FFF4BF] flex flex-col items-center justify-center gap-4 p-8">
      <p aria-live="polite" className="font-semibold text-gray-800">
        En el carrito: {cantidadEnCarrito}
      </p>
      <CardsReloj
        imgUrl={relojImg}
        nombre="Reloj Inteligente"
        precio="199.99"
        onAddToCart={() => setCantidadEnCarrito((cantidad) => cantidad + 1)}
      />
    </div>
  );
}

export default App;
