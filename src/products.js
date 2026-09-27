export const productSVGs = {
  laptop: `<svg class="w-32 h-28 mx-auto drop-shadow-sm" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="15" width="90" height="58" rx="5" fill="#1E293B" stroke="#0F172A" stroke-width="1.5"/>
    <rect x="29" y="19" width="82" height="50" rx="3" fill="#3B82F6"/>
    <path d="M29 19L85 19L65 69L29 69Z" fill="#60A5FA" fill-opacity="0.6"/>
    <rect x="58" y="32" width="24" height="16" rx="2" fill="#DBEAFE" fill-opacity="0.8"/>
    <circle cx="70" cy="17" r="1" fill="#64748B"/>
    <path d="M12 75H128C128 75 125 87 116 88H24C15 87 12 75 12 75Z" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5"/>
    <rect x="32" y="76" width="76" height="5" rx="1" fill="#64748B"/>
    <rect x="58" y="82" width="24" height="4" rx="1" fill="#94A3B8"/>
    <path d="M64 75H76V77H64V75Z" fill="#94A3B8"/>
  </svg>`,

  headphones: `<svg class="w-32 h-28 mx-auto drop-shadow-sm" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 60C36 36 50 18 70 18C90 18 104 36 104 60" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
    <path d="M44 48C46 32 56 26 70 26C84 26 94 32 96 48" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>
    <path d="M52 23C58 21 82 21 88 23" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>
    <rect x="30" y="52" width="8" height="12" rx="2" fill="#64748B"/>
    <rect x="25" y="58" width="18" height="32" rx="9" fill="#1E293B"/>
    <rect x="28" y="62" width="12" height="24" rx="6" fill="#2563EB"/>
    <ellipse cx="34" cy="74" rx="3" ry="8" fill="#1E293B"/>
    <rect x="102" y="52" width="8" height="12" rx="2" fill="#64748B"/>
    <rect x="97" y="58" width="18" height="32" rx="9" fill="#1E293B"/>
    <rect x="100" y="62" width="12" height="24" rx="6" fill="#2563EB"/>
    <ellipse cx="106" cy="74" rx="3" ry="8" fill="#1E293B"/>
  </svg>`,

  backpack: `<svg class="w-32 h-28 mx-auto drop-shadow-sm" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M58 22V14C58 12 62 10 70 10C78 10 82 12 82 14V22" stroke="#1D4ED8" stroke-width="4" stroke-linecap="round"/>
    <path d="M44 34C44 22 55 18 70 18C85 18 96 22 96 34V86C96 92 91 96 84 96H56C49 96 44 92 44 86V34Z" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/>
    <path d="M48 38C52 26 58 24 70 24C82 24 88 26 92 38" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 56C50 51 54 48 60 48H80C86 48 90 51 90 56V88C90 92 86 94 80 94H60C54 94 50 92 50 88V56Z" fill="#2563EB"/>
    <path d="M54 54H86" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="70" cy="54" r="2.5" fill="#FFFFFF"/>
    <rect x="38" y="60" width="8" height="24" rx="3" fill="#1E40AF"/>
    <rect x="94" y="60" width="8" height="24" rx="3" fill="#1E40AF"/>
    <path d="M44 88C44 92 49 96 56 96H84C91 96 96 92 96 88V90C96 94 91 98 84 98H56C49 98 44 94 44 90V88Z" fill="#1E3A8A"/>
  </svg>`,

  smartwatch: `<svg class="w-32 h-28 mx-auto drop-shadow-sm" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 10H86V32H54V10Z" fill="#334155" rx="4"/>
    <line x1="58" y1="16" x2="82" y2="16" stroke="#475569" stroke-width="1.5"/>
    <line x1="58" y1="22" x2="82" y2="22" stroke="#475569" stroke-width="1.5"/>
    <path d="M54 78H86V100H54V78Z" fill="#334155" rx="4"/>
    <line x1="58" y1="86" x2="82" y2="86" stroke="#475569" stroke-width="1.5"/>
    <line x1="58" y1="92" x2="82" y2="92" stroke="#475569" stroke-width="1.5"/>
    <rect x="46" y="26" width="48" height="58" rx="14" fill="#0F172A" stroke="#475569" stroke-width="2"/>
    <rect x="50" y="30" width="40" height="50" rx="10" fill="#1E293B"/>
    <text x="70" y="52" fill="#38BDF8" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">10:09</text>
    <circle cx="60" cy="66" r="3.5" fill="#F43F5E"/>
    <circle cx="70" cy="66" r="3.5" fill="#22C55E"/>
    <circle cx="80" cy="66" r="3.5" fill="#0EA5E9"/>
    <rect x="94" y="38" width="3.5" height="10" rx="1.5" fill="#64748B"/>
  </svg>`
}

export const products = [
  {
    id: 'laptop',
    name: 'Laptop',
    price: 12900,
    priceFormatted: '฿12,900',
    rating: 4.3,
    reviews: 24,
    category: 'Electronics',
    svg: productSVGs.laptop
  },
  {
    id: 'headphones',
    name: 'Headphones',
    price: 1290,
    priceFormatted: '฿1,290',
    rating: 4.3,
    reviews: 18,
    category: 'Electronics',
    svg: productSVGs.headphones
  },
  {
    id: 'backpack',
    name: 'Backpack',
    price: 890,
    priceFormatted: '฿890',
    rating: 4.7,
    reviews: 32,
    category: 'Accessories',
    svg: productSVGs.backpack
  },
  {
    id: 'smartwatch',
    name: 'Smart Watch',
    price: 2990,
    priceFormatted: '฿2,990',
    rating: 4.4,
    reviews: 20,
    category: 'Electronics',
    svg: productSVGs.smartwatch
  }
]

export const recentOrders = [
  { id: 1, date: '2025-09-15', customer: 'Somchai J.', items: 3, total: '฿1,260', status: 'Completed', statusClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200/60' },
  { id: 2, date: '2025-09-14', customer: 'Nattaya K.', items: 1, total: '฿520', status: 'Processing', statusClass: 'bg-blue-50 text-blue-600 border border-blue-200/60' },
  { id: 3, date: '2025-09-13', customer: 'Kritsada P.', items: 2, total: '฿980', status: 'Shipped', statusClass: 'bg-purple-50 text-purple-600 border border-purple-200/60' },
  { id: 4, date: '2025-09-12', customer: 'Piyaporn S.', items: 1, total: '฿450', status: 'Completed', statusClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200/60' },
  { id: 5, date: '2025-09-11', customer: 'Thanawat C.', items: 4, total: '฿1,800', status: 'Pending', statusClass: 'bg-amber-50 text-amber-600 border border-amber-200/60' }
]

export const userProfile = {
  name: 'Alex Student',
  email: 'alex@email.com',
  studentId: '6501234567',
  summary: {
    totalOrders: 128,
    totalSpent: '฿48,500',
    wishlistItems: 6,
    loyaltyPoints: 320
  }
}
