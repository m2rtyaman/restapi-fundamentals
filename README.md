# Bookstore REST API 📚

A simple RESTful API built with **Node.js** and **Express.js** to manage a bookstore inventory. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations without a database (using in-memory data storage).

## 🚀 Features

* **GET** all books or a single book by ID.
* **POST** a new book (Auto-increment ID).
* **PUT** update an existing book's title.
* **DELETE** remove a book from the inventory.
* **Middleware** implementation for JSON parsing.

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

## ⚙️ Installation & Usage

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR-USERNAME/bookstore-rest-api.git](https://github.com/YOUR-USERNAME/bookstore-rest-api.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    node app.js
    ```
    *Server runs on http://localhost:3000*

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/get` | List all books | - |
| **GET** | `/get/:id` | Get a book by ID | - |
| **POST** | `/add` | Add a new book | *(Auto-generated)* |
| **PUT** | `/update/:id` | Update book title | `{ "title": "New Name" }` |
| **DELETE** | `/delete/:id` | Delete a book | - |

---
*Developed to practice REST API architecture and Express.js routing.*