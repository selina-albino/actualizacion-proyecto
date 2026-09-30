function CardsReloj({ imgUrl, nombre, precio, onAddToCart }) {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3">
      <img
        src={imgUrl}
        alt={nombre}
        className="w-full h-60 object-cover rounded-xl"
      />
      <h2 className="text-lg font-semibold text-gray-800">{nombre}</h2>
      <p className="text-2xl font-bold text-gray-900">Bs {precio}</p>
      <button
        type="button"
        onClick={onAddToCart}
        className="w-full bg-[#8C56D4] hover:bg-[#DC95FF] text-white font-semibold py-2 rounded-full transition-colors"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default CardsReloj;