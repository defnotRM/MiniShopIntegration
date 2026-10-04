import { PackageIcon, CartIcon } from './Icons'

export default function Dashboard({ totalProducts = 24 }) {
  const recentOrders = [
    { id: 1, date: '2025-09-15', customer: 'Somchai J.', items: 3, total: '฿1,260', status: 'Completed', statusClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200' },
    { id: 2, date: '2025-09-14', customer: 'Nattaya K.', items: 1, total: '฿520', status: 'Processing', statusClass: 'bg-blue-50 text-blue-600 border border-blue-200' },
    { id: 3, date: '2025-09-13', customer: 'Kritsada P.', items: 2, total: '฿980', status: 'Shipped', statusClass: 'bg-purple-50 text-purple-600 border border-purple-200' },
    { id: 4, date: '2025-09-12', customer: 'Piyaporn S.', items: 1, total: '฿450', status: 'Completed', statusClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200' },
    { id: 5, date: '2025-09-11', customer: 'Thanawat C.', items: 4, total: '฿1,800', status: 'Pending', statusClass: 'bg-amber-50 text-amber-600 border border-amber-200' }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-xs p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <PackageIcon className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Products</p>
            <h3 className="text-3xl font-extrabold text-blue-600 mt-1">{totalProducts}</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-xs p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
            <CartIcon className="w-7 h-7 text-green-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Orders</p>
            <h3 className="text-3xl font-extrabold text-green-600 mt-1">128</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-xs p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <span className="font-extrabold text-2xl text-purple-600">฿</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Revenue</p>
            <h3 className="text-3xl font-extrabold text-purple-700 mt-1">฿48,500</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-xs p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-5">Recent Orders</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400">
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4 text-center">Items</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 text-gray-500 font-medium">{order.id}</td>
                  <td className="py-3.5 px-4 text-gray-600">{order.date}</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-800">{order.customer}</td>
                  <td className="py-3.5 px-4 text-gray-600 text-center">{order.items}</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">{order.total}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${order.statusClass}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
