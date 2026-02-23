## 🚀 Backend Development

Backend is the **logic + data layer** of an application.  
It handles requests, business logic, authentication, and database operations.

---

## 🔑 Main Backend Components

### 1️⃣ Programming Language (Logic Engine)

This is used to process requests and build APIs.

**Popular Backend Languages**
- JavaScript → Node.js
- Java → Enterprise applications
- PHP → Traditional web apps
- Golang → Fast and scalable systems

👉 Think of the language as the **brain/chef** that processes data.

---

### 2️⃣ Database (Storage Layer)

Stores application data like users, products, messages, etc.

#### ✅ Relational Databases (SQL)
Structured tables with relationships
- MySQL
- PostgreSQL
- SQLite

#### ✅ Non-Relational Databases (NoSQL)
Flexible JSON-like documents
- MongoDB

👉 SQL = structured tables  
👉 MongoDB = flexible document storage

---

### 3️⃣ ORM / ODM (Translator Layer)

Helps backend language communicate with database easily.

#### 🔹 ORM (for SQL databases)
- Prisma
- Sequelize
- TypeORM

#### 🔹 ODM (for MongoDB)
- Mongoose

👉 Example:
```js
// Without ORM
SELECT * FROM users;

// With ORM
prisma.user.findMany();


### Backend Flow (Request Lifecycle)
Client → API Request → Backend Language → ORM/ODM → Database → Response