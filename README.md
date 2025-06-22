# 📝 TO-DO List Application

## 📖 **About**

The **TO-DO List App** is a **task management web application** designed to help users stay organized in their **daily activities**.

You can use it for:
- 🛒 **Shopping lists**
- 📝 **Taking notes**
- 📅 **Planning events**

This app is built using **HTML**, **CSS**, and **JavaScript**, and lets users:
- ➕ **Add tasks**
- ✅ **Mark tasks as completed**
- ❌ **Delete tasks**
- 💾 **Save tasks in `localStorage`** to retain them after page reloads

---

## 🚀 **Features**

- 📋 Quickly **add new tasks**
- ✅ Toggle **task completion**
- ❌ **Delete** any task with a click
- 💾 Persistent storage using **localStorage**
- 🎨 **Modern UI** with responsive design
- 🧩 Uses **Font Awesome icons**

---

## 📁 **Project Structure**

to-do-list-app/
│
├── index.html     # 💻 Main HTML file
├── style.css      # 🎨 Styling for the app
├── script.js      # ⚙️ JavaScript functionality
├── README.md      # 📄 Project documentation
└── screenshot.png # 📸 App screenshot

## 🛠️ **How It Works**

- The input box (`#taskInput`) is used to **enter tasks**
- On clicking **Add**, a new `<li>` is created **dynamically** using JavaScript
- Each task includes:
  - ✅ A checkbox to **mark complete**
  - ❌ A button to **delete the task**
- Clicking a task toggles its **completed state**
- All tasks are saved in **`localStorage`** for persistence
