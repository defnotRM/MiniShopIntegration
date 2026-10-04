# MiniShop React Application

โปรเจกต์พัฒนาระบบร้านค้าออนไลน์ **MiniShop** ด้วย **Vite + React + Tailwind CSS**  
(ใบงาน Week 6-8: MiniShop React: From UI to Interactive Web Application)

---

## การติดตั้งและเริ่มใช้งาน

1. ติดตั้ง Dependencies:
```bash
npm install
```

2. รัน Development Server:
```bash
npm run dev
```

3. เข้าใช้งานผ่านเบราว์เซอร์:
```
http://localhost:5173/
```

---

## โครงสร้างโปรเจกต์ (Project Structure)

```text
src/
├── components/
│   ├── Header.jsx              # ส่วนหัวเว็บ โลโก้ เมนู และปุ่มตะกร้า
│   ├── ProductCard.jsx         # การ์ดแสดงผลสินค้า รับ props (name, price, image, category)
│   ├── ProductList.jsx         # Component แสดงผลรายการสินค้าแบบ Grid
│   ├── Profile.jsx             # หน้าโปรไฟล์ผู้ใช้และ Account Summary
│   ├── Dashboard.jsx           # หน้าแดชบอร์ดสรุปยอดขายและคำสั่งซื้อ
│   ├── ProductDetailModal.jsx  # Modal แสดงรายละเอียดสินค้าเพิ่มเติม (Challenge 3)
│   └── CartModal.jsx           # Drawer ตะกร้าสินค้าและยอดรวม (Challenge 4)
├── App.jsx                     # Component หลัก จัดการ State, API Fetching และ Filtering
├── index.css                   # นำเข้า Tailwind CSS v4 (@import "tailwindcss";)
└── main.jsx                    # จุดเริ่มต้น React DOM Mounting
```

---

## คุณสมบัติและการทำงานตามข้อกำหนด (Requirements)

1. **Components & Props**:
   - แยก Component ชัดเจน (`Header`, `ProductCard`, `ProductList`, `Profile`)
   - `ProductCard` รับ `name`, `price`, `image`, `category` ผ่าน Props ตามโจทย์
2. **State & Events**:
   - ใช้ `useState` จัดการ State: `cartCount`, `search`, `category`, `sortBy`, `products`
   - ผูก Event `onClick` และ `onChange` สำหรับปุ่มและการพิมพ์ค้นหา
3. **Data Fetching (REST API)**:
   - ใช้ `useEffect` ดึงข้อมูลสินค้าแบบ Dynamic จาก `https://fakestoreapi.com/products`
4. **3 สถานะการแสดงผล**:
   - **Loading State**: แสดงสถานะ `"Loading products..."` ระหว่างรอข้อมูล
   - **Error State**: แสดง `"ไม่สามารถโหลดข้อมูลได้"` พร้อมปุ่มให้ลองใหม่หากเกิดข้อผิดพลาด
   - **Empty State**: แสดง `"ไม่พบสินค้าที่ค้นหา"` หากผลการค้นหาไม่พบรายการ
5. **Bonus Challenges (Part 14)**:
   - **Challenge 1**: กรองสินค้าตามหมวดหมู่ (Category Filter)
   - **Challenge 2**: ปุ่มจัดเรียงราคาสินค้า (Sort Price Low → High / High → Low)
   - **Challenge 3**: ปุ่ม "View Detail" ดูรายละเอียดสินค้าเพิ่มเติม
   - **Challenge 4**: ระบบตะกร้าสินค้าแบบ Interactive พร้อมคำนวณยอดรวม
