// استيراد الحاجات الأساسية
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use("images", express.static("images")); // لو حطيت صور في مجلد server/images
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // لو حطيت ملفات في مجلد public

// بيانات منتجات تجريبية
const products = [
  { id: 1, title: "Product 1", name: "Cool T-shirt", price: { org: 100, mrp: 120, off: 20 }, img: "img1.png", sizes: ["S","M","L","XL"], desc:"A cool t-shirt." },
  { id: 2, title: "Product 2", name: "Running Shoes", price: { org: 200, mrp: 250, off: 50 }, img: "img2.png", sizes: ["8","9","10"], desc:"Comfortable running shoes." },
  { id: 3, title: "Product 3", name: "Jeans", price: { org: 150, mrp: 180, off: 30 }, img: "img3.png", sizes: ["M","L","XL"], desc:"Blue denim jeans." },
  { id: 4, title: "Product 4", name: "Jacket", price: { org: 300, mrp: 350, off: 50 }, img: "img4.png", sizes: ["M","L","XL"], desc:"Warm winter jacket." },
  { id: 5, title: "Product 5", name: "Cap", price: { org: 50, mrp: 60, off: 10 }, img: "img5.png", sizes: ["One Size"], desc:"Stylish cap." },
  { id: 6, title: "Product 6", name: "Sunglasses", price: { org: 80, mrp: 100, off: 20 }, img: "img6.png", sizes: ["One Size"], desc:"Cool sunglasses." },
  { id: 7, title: "Product 7", name: "Backpack", price: { org: 120, mrp: 150, off: 30 }, img: "img7.png", sizes: ["One Size"], desc:"Durable backpack." },
  { id: 8, title: "Product 8", name: "Watch", price: { org: 250, mrp: 300, off: 50 }, img: "img8.png", sizes: ["One Size"], desc:"Elegant wrist watch." },
  { id: 9, title: "Product 9", name: "Headphones", price: { org: 180, mrp: 220, off: 40 }, img: "img9.png", sizes: ["One Size"], desc:"Noise-cancelling headphones." },
  { id: 10, title: "Product 10", name: "Smartphone", price: { org: 600, mrp: 700, off: 100 }, img: "img10.png", sizes: ["One Size"], desc:"Latest model smartphone." },
];

// منتجات جديدة مستقلة


// لتخزين الأوردرز مؤقتًا
let orders = [];

// لتخزين الرسائل من صفحة Contact
let contacts = [];

// APIs
app.get("/api/products", (req, res) => res.json(products));

// API جديد للنيو أرايفلز فقط
app.get("/api/new-arrivals", (req, res) => res.json(newArrivals));

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product);
});

app.post("/api/orders", (req, res) => {
  orders.push(req.body);
  res.json({ message: "Order placed successfully", order: req.body });
});

app.post("/api/contact", (req, res) => {
  contacts.push(req.body);
  res.json({ message: "Message received" });
});

// تشغيل السيرفر
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
