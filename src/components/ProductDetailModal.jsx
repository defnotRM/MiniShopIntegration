import { CloseIcon, PackageIcon, StarIcon } from './Icons'

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full capitalize">
              {product.category || 'General'}
            </span>
            <h3 className="font-bold text-gray-900 text-xl mt-2">{product.title || product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-1"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="h-56 bg-slate-50 rounded-xl flex items-center justify-center p-4 overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title || product.name}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <PackageIcon className="w-20 h-20 text-gray-300" />
          )}
        </div>

        <div>
          <p className="text-2xl font-extrabold text-blue-600">
            ฿{typeof product.price === 'number' ? product.price.toLocaleString() : product.price}
          </p>

          {product.rating && (
            <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-600">
              <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gray-800">{product.rating.rate || product.rating}</span>
              {product.rating.count && <span className="text-gray-400">({product.rating.count} reviews)</span>}
            </div>
          )}

          <div className="mt-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">รายละเอียดสินค้า</h4>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {product.description || 'ไม่มีรายละเอียดเพิ่มเติมสำหรับสินค้านี้'}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-sm"
          >
            ปิด
          </button>
          <button
            onClick={() => {
              onAddToCart(product)
              onClose()
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm shadow-xs"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
