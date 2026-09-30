export default function CardZapatilla() {
  const productName = 'Nike Air Zoom Pegasus 40'
  const productPrice = 129.99
  const productImage = '/zapatilla.png'

  return (
    <div className="w-72 bg-white rounded-3xl shadow-xl p-4">
      <div className="bg-slate-100 rounded-2xl p-4 flex items-center justify-center">
        <img src={productImage} alt={productName} className="w-full h-40 object-contain" />
      </div>

      <h2 className="mt-4 text-lg font-bold text-gray-900">{productName}</h2>
      <p className="mt-1 text-2xl font-extrabold text-gray-900">${productPrice}</p>

      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full cursor-pointer transition">
        Add to Cart
      </button>
    </div>
  )
}