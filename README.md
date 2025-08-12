# 📝 React Redux Todo App

A simple and clean **Todo List** app built with **React** and **Redux**, featuring add, update, delete, and complete tasks functionality.  
Todos are persisted in **localStorage** so they stay even after refreshing the page.

## 🚀 Features

- ➕ Add new todos
- ✏️ Edit existing todos
- ✅ Mark todos as completed
- ❌ Delete todos
- 💾 Auto-save todos to `localStorage`
- ⌨️ Press **Enter** to quickly add or update todos
- 🎯 Focus input when editing

## 📂 Project Structure

src/
├── App.jsx # Main component
├── App.css # Styles
├── redux/
│ └── todosReducer.js # Redux slice for todos
└── index.js # App entry point


---

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-app.git
```
2. Navigate into the project folder:
```bash
cd todo-app
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm start
```

---

##  🛠️ Usage

1. Type your todo in the input box.

2. Click Add or press Enter to save.

3. Use the checkbox to mark completed.

4. Click the ✏️ edit button to update text.

5. Click the 🗑️ delete button to remove.


---

## 💾 Local Storage

Todos are saved in the browser’s localStorage automatically, so your list is persistent across page reloads.


