# 🛍️ MERN Product Shop

A full-stack product management application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Supports full **CRUD operations** — create, read, update, and delete products through a clean React frontend connected to a RESTful API backend.

🔗 **Live Demo:** [mern-product-shop-14g8.vercel.app](https://mern-product-shop-14g8.vercel.app)  
> ⚠️ Note: Backend is hosted on Render's free tier — first load may take 30–60 seconds to spin up.

---

## ✨ Features

- 📦 View all products in a clean, responsive UI
- ➕ Add new products (name, price, image)
- ✏️ Update existing product details
- 🗑️ Delete products
- 🔗 REST API with proper route separation
- 💾 Persistent data storage with MongoDB Atlas

---

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js, Axios                   |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB, Mongoose                 |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📁 Project Structure

```
MERN-Product-Shop/
├── FRONTEND/          # React app
│   └── src/
│       ├── components/
│       └── pages/
├── BACKEND/           # Express server
│   ├── routes/
│   ├── models/
│   └── server.js
├── .env
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repo
```bash
git clone https://github.com/Yashgitb/MERN-Product-Shop.git
cd MERN-Product-Shop
```

### 2. Setup Backend
```bash
cd BACKEND
npm install
```

Create a `.env` file in the root:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd FRONTEND
npm install
npm start
```

App runs at `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/products`    | Get all products    |
| POST   | `/api/products`    | Create new product  |
| PUT    | `/api/products/:id`| Update a product    |
| DELETE | `/api/products/:id`| Delete a product    |

---

## 🔮 Future Improvements

- [ ] User authentication (JWT)
- [ ] Product categories and search/filter
- [ ] Pagination for large product lists
- [ ] Image upload with Cloudinary

---

## 👤 Author

**Yash** — [github.com/Yashgitb](https://github.com/Yashgitb)
