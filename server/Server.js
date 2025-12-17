// استيراد الحاجات الأساسية
import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use("images", express.static("images")); // لو حطيت صور في مجلد server/images
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // لو حطيت صور في مجلد public

// بيانات منتجات تجريبية
const products = [
  { id: 1, title: "Product 1", name: "Cool T-shirt", price: { org: 100, mrp: 120, off: 20 }, img: "img1.png", sizes: ["S","M","L","XL"], desc:"A cool t-shirt." },
  { id: 2, title: "Product 2", name: "Running Shoes", price: { org: 200, mrp: 250, off: 50 }, img: "img2.png", sizes: ["8","9","10"], desc:"Comfortable running shoes." },
  { id: 3, title: "Product 3", name: "Jeans", price: { org: 150, mrp: 180, off: 30 }, img: "img3.png", sizes: ["M","L","XL"], desc:"Blue denim jeans." },
  { id: 4, title: "Product 4", name: "Jacket", price: { org: 300, mrp: 350, off: 50 }, img: "img4.png", sizes: ["M","L","XL"], desc:"Warm winter jacket." },
  { id: 5, title: "Product 5", name: "Cap", price: { org: 50, mrp: 60, off: 10 }, img: "img5.png", sizes: ["One Size"], desc:"Stylish cap." },
];


// لتخزين الأوردرز مؤقتًا
let orders = [];

// لتخزين الرسائل من صفحة Contact
let contacts = [];

// APIs
app.get("/api/products", (req, res) => res.json(products));
app.get("/api/new-arrivals", (req, res) => res.json(products));
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
