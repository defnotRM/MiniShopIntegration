import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import ProductDetailModal from './components/ProductDetailModal'
import CartModal from './components/CartModal'
import { SearchIcon, AlertIcon, EmptySearchIcon } from './components/Icons'

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeTab, setActiveTab] = useState('products')

  const fetchProducts = () => {
    setLoading(true)
    setError('')

    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('API Error')
        }
        return response.json()
      })
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        fetch('/products.json')
          .then(res => {
            if (!res.ok) throw new Error('Local file not found')
            return res.json()
          })
          .then(localData => {
            setProducts(localData)
            setLoading(false)
          })
          .catch(() => {
            setError('ไม่สามารถโหลดข้อมูลได้')
            setLoading(false)
          })
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1)
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, {
        id: product.id,
        name: product.title || product.name,
        price: product.price,
        image: product.image,
        qty: 1
      }]
    })
  }

  const handleRemoveCartItem = (index) => {
    setCartItems(prev => {
      const target = prev[index]
      if (target) {
        setCartCount(Math.max(0, cartCount - target.qty))
      }
      return prev.filter((_, i) => i !== index)
    })
  }

  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))]

  const filteredProducts = products
    .filter(product => {
      const title = (product.title || product.name || '').toLowerCase()
      const matchesSearch = title.includes(search.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price
      if (sortBy === 'high-low') return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <Header
        cartCount={cartCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard totalProducts={products.length} />
        )}

        {activeTab === 'profile' && (
          <Profile />
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Products</h2>
                <p className="text-xs text-gray-500 mt-1">
                  ระบบค้นหา กรองหมวดหมู่ และเรียงลำดับราคา
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-gray-500">เรียงตามราคา:</span>
                <button
                  onClick={() => setSortBy('low-high')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    sortBy === 'low-high'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Sort Price Low → High
                </button>
                <button
                  onClick={() => setSortBy('high-low')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    sortBy === 'high-low'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Sort Price High → Low
                </button>
                {sortBy !== 'default' && (
                  <button
                    onClick={() => setSortBy('default')}
                    className="text-xs text-gray-400 hover:text-gray-600 underline px-1"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <SearchIcon className="w-4 h-4 text-gray-400" />
                </span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="sm:w-56 shrink-0">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer font-medium capitalize"
                >
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat === 'All' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {loading && (
              <div className="p-16 text-center text-gray-500 space-y-3 bg-white rounded-2xl border border-gray-100">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-base font-medium">Loading products...</p>
              </div>
            )}

            {error && (
              <div className="p-12 text-center text-red-600 bg-red-50/60 rounded-2xl border border-red-200 space-y-3">
                <AlertIcon className="w-10 h-10 text-red-500 mx-auto" />
                <p className="text-base font-semibold">{error}</p>
                <button
                  onClick={fetchProducts}
                  className="bg-white border border-red-200 text-red-600 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-red-50 transition-colors shadow-2xs"
                >
                  ลองใหม่อีกครั้ง
                </button>
              </div>
            )}

            {!loading && !error && filteredProducts.length === 0 && (
              <div className="text-center p-16 bg-white rounded-2xl border border-gray-100 text-gray-500 space-y-2">
                <EmptySearchIcon className="w-12 h-12 text-gray-300 mx-auto" />
                <p className="text-base font-medium">ไม่พบสินค้าที่ค้นหา</p>
                <button
                  onClick={() => {
                    setSearch('')
                    setCategory('All')
                  }}
                  className="text-sm text-blue-600 hover:underline pt-2 inline-block"
                >
                  ล้างคำค้นหาทั้งหมด
                </button>
              </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <ProductList
                products={filteredProducts}
                onAddToCart={handleAddToCart}
                onViewDetail={(product) => setSelectedProduct(product)}
              />
            )}
          </div>
        )}
      </main>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
      />
    </div>
  )
}
