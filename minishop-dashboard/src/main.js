import './style.css'
import { icons } from './icons.js'
import { products, recentOrders, userProfile } from './products.js'

const state = {
  activeScreen: 'dashboard',
  cartCount: 2,
  cartItems: [
    { name: 'Laptop', price: '฿12,900', qty: 1 },
    { name: 'Backpack', price: '฿890', qty: 1 }
  ],
  isCartOpen: false,
  searchQuery: '',
  selectedCategory: 'all',
  profile: { ...userProfile },
  isEditProfileOpen: false
}

function showToast(message) {
  const existing = document.getElementById('minishop-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.id = 'minishop-toast'
  toast.className = 'fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0'
  toast.innerHTML = `
    <span class="text-green-400">✓</span>
    <span class="text-sm font-medium">${message}</span>
  `
  document.body.appendChild(toast)

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0')
  })

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0')
    setTimeout(() => toast.remove(), 300)
  }, 2200)
}

function renderHeader() {
  return `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-3 cursor-pointer" id="header-logo">
            <span class="text-2xl font-extrabold text-blue-600 tracking-tight hover:opacity-90 transition-opacity">
              MiniShop
            </span>
          </div>

          <div class="flex items-center gap-4 sm:gap-5">
            <button id="header-search-btn" title="Search" class="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              ${icons.search}
            </button>

            <button id="header-cart-btn" title="Cart" class="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              ${icons.cart}
              <span id="cart-badge-count" class="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-xs">
                ${state.cartCount}
              </span>
            </button>

            <button id="header-avatar-btn" title="Profile" class="text-gray-400 hover:text-blue-600 hover:opacity-90 transition-colors">
              ${icons.userCircle}
            </button>
          </div>
        </div>
      </div>
    </header>
  `
}

function renderSidebar() {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: icons.dashboard },
    { id: 'products', label: 'Products', icon: icons.products },
    { id: 'profile', label: 'Profile', icon: icons.profile }
  ]

  return `
    <aside class="w-full md:w-56 shrink-0 mb-6 md:mb-0">
      <nav class="space-y-1">
        ${navItems.map(item => {
          const isActive = state.activeScreen === item.id
          return `
            <button 
              data-screen="${item.id}" 
              class="nav-item-btn w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 shadow-xs' 
                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
              }"
            >
              <span class="${isActive ? 'text-blue-600' : 'text-gray-400'}">
                ${item.icon}
              </span>
              <span>${item.label}</span>
            </button>
          `
        }).join('')}
      </nav>
    </aside>
  `
}

function renderDashboardScreen() {
  return `
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl border border-gray-100 shadow-xs p-6 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            ${icons.cube}
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Products</p>
            <h3 class="text-3xl font-extrabold text-blue-600 mt-1">24</h3>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-gray-100 shadow-xs p-6 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div class="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            ${icons.cart}
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Orders</p>
            <h3 class="text-3xl font-extrabold text-green-600 mt-1">128</h3>
          </div>
        </div>

        <div class="bg-white rounded-xl border border-gray-100 shadow-xs p-6 flex items-center gap-5 transition-transform hover:-translate-y-0.5 duration-200">
          <div class="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            ${icons.baht}
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Revenue</p>
            <h3 class="text-3xl font-extrabold text-purple-700 mt-1">฿48,500</h3>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-100 shadow-xs p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-5">Recent Orders</h2>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-gray-100 text-xs font-semibold text-gray-400">
                <th class="py-3 px-4 w-12">#</th>
                <th class="py-3 px-4">Date</th>
                <th class="py-3 px-4">Customer</th>
                <th class="py-3 px-4 text-center">Items</th>
                <th class="py-3 px-4">Total</th>
                <th class="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50 text-sm">
              ${recentOrders.map(order => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="py-3.5 px-4 text-gray-500 font-medium">${order.id}</td>
                  <td class="py-3.5 px-4 text-gray-600">${order.date}</td>
                  <td class="py-3.5 px-4 font-semibold text-gray-800">${order.customer}</td>
                  <td class="py-3.5 px-4 text-gray-600 text-center">${order.items}</td>
                  <td class="py-3.5 px-4 font-semibold text-gray-900">${order.total}</td>
                  <td class="py-3.5 px-4 text-right">
                    <span class="inline-block text-xs font-semibold px-3 py-1 rounded-full ${order.statusClass}">
                      ${order.status}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
}

function renderProductsScreen() {
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    const matchesCategory = state.selectedCategory === 'all' || p.category === state.selectedCategory
    return matchesSearch && matchesCategory
  })

  return `
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Products</h1>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div class="relative flex-1">
          <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            ${icons.search}
          </span>
          <input 
            type="text" 
            id="products-search-input"
            value="${state.searchQuery}"
            placeholder="Search products..." 
            class="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
          >
        </div>

        <div class="sm:w-48 shrink-0">
          <select 
            id="category-filter-select"
            class="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer font-medium"
          >
            <option value="all" ${state.selectedCategory === 'all' ? 'selected' : ''}>All Categories</option>
            <option value="Electronics" ${state.selectedCategory === 'Electronics' ? 'selected' : ''}>Electronics</option>
            <option value="Accessories" ${state.selectedCategory === 'Accessories' ? 'selected' : ''}>Accessories</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${filteredProducts.length > 0 ? filteredProducts.map(p => `
          <div class="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 flex flex-col justify-between hover:shadow-md hover:border-gray-200 transition-all duration-200 group">
            <div>
              <div class="h-44 bg-slate-50/80 rounded-xl flex items-center justify-center p-4 group-hover:bg-blue-50/30 transition-colors">
                ${p.svg}
              </div>

              <div class="mt-4">
                <h3 class="font-bold text-gray-800 text-base leading-snug">${p.name}</h3>
                <p class="text-base font-bold text-gray-900 mt-1">${p.priceFormatted}</p>
                <div class="flex items-center gap-1.5 mt-1.5 text-xs">
                  <span class="text-amber-500 flex items-center">★ <span class="font-semibold text-gray-700 ml-1">${p.rating}</span></span>
                  <span class="text-gray-400">(${p.reviews})</span>
                </div>
              </div>
            </div>

            <button 
              data-add-product="${p.id}"
              class="add-to-cart-btn w-full mt-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-150 shadow-xs hover:shadow-blue-500/20"
            >
              Add to Cart
            </button>
          </div>
        `).join('') : `
          <div class="col-span-full py-12 text-center text-gray-500">
            <p class="text-base font-medium">ไม่พบสินค้าที่ค้นหา</p>
            <button id="reset-filter-btn" class="mt-3 text-sm text-blue-600 hover:underline">ล้างตัวกรองทั้งหมด</button>
          </div>
        `}
      </div>
    </div>
  `
}

function renderProfileScreen() {
  return `
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-900 tracking-tight">Profile</h1>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-xs p-8 text-center">
          <div class="w-28 h-28 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center text-4xl shadow-inner">
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd"/>
            </svg>
          </div>

          <h2 class="text-xl font-bold text-gray-900 mt-5">${state.profile.name}</h2>
          
          <div class="mt-4 space-y-2 text-sm text-gray-500">
            <div class="flex items-center justify-center gap-2">
              ${icons.email}
              <span>${state.profile.email}</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              ${icons.idCard}
              <span>Student ID: ${state.profile.studentId}</span>
            </div>
          </div>

          <button 
            id="edit-profile-btn"
            class="w-full mt-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
          >
            ${icons.edit}
            <span>Edit Profile</span>
          </button>
        </div>

        <div class="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-xs p-8">
          <h2 class="text-base font-bold text-gray-800 mb-6">Account Summary</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-blue-50/60 border border-blue-100/70 rounded-2xl p-5 transition-transform hover:scale-[1.01]">
              <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                ${icons.cart}
              </div>
              <p class="text-xs font-semibold text-gray-500">Total Orders</p>
              <h3 class="text-2xl font-extrabold text-gray-900 mt-1">${state.profile.summary.totalOrders}</h3>
            </div>

            <div class="bg-purple-50/60 border border-purple-100/70 rounded-2xl p-5 transition-transform hover:scale-[1.01]">
              <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                <span class="font-bold text-lg">฿</span>
              </div>
              <p class="text-xs font-semibold text-gray-500">Total Spent</p>
              <h3 class="text-2xl font-extrabold text-purple-700 mt-1">${state.profile.summary.totalSpent}</h3>
            </div>

            <div class="bg-green-50/60 border border-green-100/70 rounded-2xl p-5 transition-transform hover:scale-[1.01]">
              <div class="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-3">
                ${icons.cube}
              </div>
              <p class="text-xs font-semibold text-gray-500">Wishlist Items</p>
              <h3 class="text-2xl font-extrabold text-gray-900 mt-1">${state.profile.summary.wishlistItems}</h3>
            </div>

            <div class="bg-amber-50/60 border border-amber-100/70 rounded-2xl p-5 transition-transform hover:scale-[1.01]">
              <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-500 flex items-center justify-center mb-3">
                ${icons.star}
              </div>
              <p class="text-xs font-semibold text-gray-500">Loyalty Points</p>
              <h3 class="text-2xl font-extrabold text-gray-900 mt-1">${state.profile.summary.loyaltyPoints}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderCartDrawer() {
  if (!state.isCartOpen) return ''

  return `
    <div id="cart-drawer-backdrop" class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex justify-end transition-opacity">
      <div class="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
        <div class="flex items-center justify-between pb-4 border-b border-gray-100">
          <div class="flex items-center gap-2">
            ${icons.cart}
            <h2 class="font-bold text-gray-900 text-lg">ตะกร้าสินค้า (${state.cartCount})</h2>
          </div>
          <button id="close-cart-btn" class="p-2 text-gray-400 hover:text-gray-700 rounded-lg">✕</button>
        </div>

        <div class="flex-1 overflow-y-auto py-4 space-y-4">
          ${state.cartItems.map((item) => `
            <div class="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl">
              <div>
                <h4 class="font-semibold text-gray-800 text-sm">${item.name}</h4>
                <p class="text-xs text-gray-500 mt-0.5">จำนวน: ${item.qty}</p>
              </div>
              <div class="text-right">
                <span class="font-bold text-gray-900 text-sm">${item.price}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="pt-4 border-t border-gray-100 space-y-3">
          <button 
            id="checkout-btn" 
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm shadow-xs transition-colors"
          >
            Checkout
          </button>
          <button 
            id="close-cart-secondary-btn" 
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-xl text-sm transition-colors"
          >
            เลือกซื้อสินค้าต่อ
          </button>
        </div>
      </div>
    </div>
  `
}

function renderEditProfileModal() {
  if (!state.isEditProfileOpen) return ''

  return `
    <div id="edit-profile-backdrop" class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95 duration-150">
        <div class="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 class="font-bold text-gray-900 text-lg">Edit Profile</h3>
          <button id="close-profile-modal-btn" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
        </div>

        <form id="edit-profile-form" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              value="${state.profile.name}" 
              required
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              value="${state.profile.email}" 
              required
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1">Student ID</label>
            <input 
              type="text" 
              name="studentId" 
              value="${state.profile.studentId}" 
              required
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
          </div>

          <div class="pt-3 flex gap-3">
            <button 
              type="button" 
              id="cancel-profile-btn"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-xl text-sm transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors shadow-xs"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `
}

function renderApp() {
  const app = document.querySelector('#app')

  let mainContent = ''
  switch (state.activeScreen) {
    case 'dashboard':
      mainContent = renderDashboardScreen()
      break
    case 'products':
      mainContent = renderProductsScreen()
      break
    case 'profile':
      mainContent = renderProfileScreen()
      break
    default:
      mainContent = renderDashboardScreen()
  }

  app.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#F8FAFC]">
      ${renderHeader()}

      <div class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row items-start gap-8">
          ${renderSidebar()}
          
          <main class="flex-1 w-full min-w-0">
            ${mainContent}
          </main>
        </div>
      </div>

      ${renderCartDrawer()}
      ${renderEditProfileModal()}
    </div>
  `

  attachEventListeners()
}

function attachEventListeners() {
  document.querySelectorAll('[data-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.getAttribute('data-screen')
      state.activeScreen = screen
      renderApp()
    })
  })

  const logo = document.getElementById('header-logo')
  if (logo) {
    logo.addEventListener('click', () => {
      state.activeScreen = 'dashboard'
      renderApp()
    })
  }

  const avatarBtn = document.getElementById('header-avatar-btn')
  if (avatarBtn) {
    avatarBtn.addEventListener('click', () => {
      state.activeScreen = 'profile'
      renderApp()
    })
  }

  const searchBtn = document.getElementById('header-search-btn')
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      state.activeScreen = 'products'
      renderApp()
      setTimeout(() => {
        const input = document.getElementById('products-search-input')
        if (input) input.focus()
      }, 50)
    })
  }

  const cartBtn = document.getElementById('header-cart-btn')
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      state.isCartOpen = true
      renderApp()
    })
  }

  const closeCartBtn = document.getElementById('close-cart-btn')
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      state.isCartOpen = false
      renderApp()
    })
  }
  const closeCartSecondary = document.getElementById('close-cart-secondary-btn')
  if (closeCartSecondary) {
    closeCartSecondary.addEventListener('click', () => {
      state.isCartOpen = false
      renderApp()
    })
  }
  const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop')
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === cartDrawerBackdrop) {
        state.isCartOpen = false
        renderApp()
      }
    })
  }

  document.querySelectorAll('[data-add-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-add-product')
      const product = products.find(p => p.id === pid)
      if (product) {
        state.cartCount += 1
        const existing = state.cartItems.find(i => i.name === product.name)
        if (existing) {
          existing.qty += 1
        } else {
          state.cartItems.push({ name: product.name, price: product.priceFormatted, qty: 1 })
        }
        showToast(`เพิ่ม ${product.name} ลงในตะกร้าแล้ว`)
        renderApp()
      }
    })
  })

  const searchInput = document.getElementById('products-search-input')
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value
      renderApp()
      const newInput = document.getElementById('products-search-input')
      if (newInput) {
        newInput.focus()
        newInput.setSelectionRange(newInput.value.length, newInput.value.length)
      }
    })
  }

  const categorySelect = document.getElementById('category-filter-select')
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      state.selectedCategory = e.target.value
      renderApp()
    })
  }

  const resetBtn = document.getElementById('reset-filter-btn')
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.searchQuery = ''
      state.selectedCategory = 'all'
      renderApp()
    })
  }

  const checkoutBtn = document.getElementById('checkout-btn')
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showToast('ดำเนินการชำระเงินเรียบร้อย')
      state.isCartOpen = false
      renderApp()
    })
  }

  const editProfileBtn = document.getElementById('edit-profile-btn')
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
      state.isEditProfileOpen = true
      renderApp()
    })
  }
  const closeProfileModalBtn = document.getElementById('close-profile-modal-btn')
  if (closeProfileModalBtn) {
    closeProfileModalBtn.addEventListener('click', () => {
      state.isEditProfileOpen = false
      renderApp()
    })
  }
  const cancelProfileBtn = document.getElementById('cancel-profile-btn')
  if (cancelProfileBtn) {
    cancelProfileBtn.addEventListener('click', () => {
      state.isEditProfileOpen = false
      renderApp()
    })
  }
  const editProfileForm = document.getElementById('edit-profile-form')
  if (editProfileForm) {
    editProfileForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(editProfileForm)
      state.profile.name = formData.get('name')
      state.profile.email = formData.get('email')
      state.profile.studentId = formData.get('studentId')
      state.isEditProfileOpen = false
      showToast('บันทึกข้อมูลเรียบร้อย')
      renderApp()
    })
  }
}

renderApp()
