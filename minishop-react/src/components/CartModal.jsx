import { CartIcon, CloseIcon, PackageIcon } from './Icons'

export default function CartModal({ isOpen, onClose, cartItems, onRemoveItem }) {
  if (!isOpen) return null

  const totalAmount = cartItems.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.qty || 1), 0)

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <CartIcon className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900 text-lg">ตะกร้าสินค้า ({cartItems.length})</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg text-lg"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-gray-400 space-y-2">
              <CartIcon className="w-12 h-12 mx-auto text-gray-300" />
              <p className="text-sm">ไม่มีสินค้าในตะกร้า</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 border border-gray-100 shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                    ) : (
                      <PackageIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">จำนวน: {item.qty || 1}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-sm">
                    ฿{((Number(item.price) || 0) * (item.qty || 1)).toLocaleString()}
                  </p>
                  {onRemoveItem && (
                    <button
                      onClick={() => onRemoveItem(index)}
                      className="text-[11px] text-red-500 hover:underline mt-1"
                    >
                      ลบ
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">ยอดรวมทั้งหมด</span>
              <span className="text-xl font-extrabold text-blue-600">
                ฿{totalAmount.toLocaleString()}
              </span>
            </div>
            <button
              onClick={() => {
                alert('จำลองการชำระเงินเรียบร้อย!')
                onClose()
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm shadow-xs transition-colors"
            >
              Checkout (ชำระเงิน)
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
