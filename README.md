# 🗒️ To Do List – Windows 98 Style

A task management app built with **Astro**, featuring a **Windows 98**-style interface with support for two languages (English / Indonesian).

---

## ✨ Features

- **Full CRUD** — add, edit, toggle completion, delete individual items, delete all completed
- **Filter** — All / Active / Completed
- **Sort** — Newest, Oldest, Priority, A → Z
- **Task priorities** — 🔴 High, 🟡 Medium, 🔵 Low
- **i18n** — 🇺🇸 English (default) + 🇮🇩 Indonesia, persisted in `localStorage`
- **Toast notifications** — feedback for every CRUD action
- **Confirm dialog** — confirmation before deletion
- **Dummy data** — 5 pre-loaded tasks, persisted via `localStorage`
- **Status bar** — counter for total / pending / done
- **API-ready** — service layer is abstracted; just swap `localStorage` for `fetch()`

---

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg                  ← Windows 98 pixel art icon
├── src/
│   ├── components/
│   │   ├── Win98Window.astro        ← Windows 98 window component
│   │   └── TaskItem.astro           ← Reusable todo item component
│   ├── i18n/
│   │   └── translations.ts          ← UI strings in English & Indonesian
│   ├── layouts/
│   │   └── Layout.astro             ← Global Windows 98 CSS
│   ├── pages/
│   │   └── index.astro              ← Main page (CRUD + i18n + filtering)
│   └── services/
│       └── todoService.ts           ← Service layer (dummy data → API-ready)
└── package.json
```

---

## 🧞 Commands

Run all commands from the project root:

| Command               | Action                                        |
| :-------------------- | :-------------------------------------------- |
| `npm install`         | Install dependencies                          |
| `npm run dev`         | Start dev server at `localhost:4321`          |
| `npm run build`       | Build production output to `./dist/`          |
| `npm run preview`     | Preview the production build locally          |
| `npm run astro ...`   | Run the Astro CLI, e.g. `astro add`          |

> **Note:** Requires **Node.js >= 22.23.4** (matching Astro 7.x requirements).

---

## 🔌 Migrating to a Backend API

Data is currently stored in `localStorage` (client-side). When the backend is ready, simply replace the implementation in `src/services/todoService.ts` without touching any components or pages.

Example migration:

```ts
// Before (dummy / localStorage)
getAll(): Todo[] {
  return loadFromStorage();
}

// After (fetch to API)
async getAll(): Promise<Todo[]> {
  const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/todos`);
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}
```

Endpoints to prepare on the backend:

| Method   | Endpoint                    | Description               |
| :------- | :-------------------------- | :------------------------ |
| `GET`    | `/api/todos`                | Fetch all todos           |
| `GET`    | `/api/todos/:id`            | Fetch a single todo       |
| `POST`   | `/api/todos`                | Create a new todo         |
| `PATCH`  | `/api/todos/:id`            | Update a todo (partial)   |
| `DELETE` | `/api/todos/:id`            | Delete a single todo      |
| `DELETE` | `/api/todos/completed`      | Delete all completed todos|

Add the backend URL to a `.env` file:

```env
PUBLIC_API_URL=http://localhost:3001
```

---

## 🌐 Language / Bahasa

Click the language button in the menu bar to switch languages. The selection is saved automatically.

| Code  | Language              |
| :---- | :-------------------- |
| `en`  | 🇺🇸 English (default) |
| `id`  | 🇮🇩 Indonesia        |

---

## 🛠️ Tech Stack

- [Astro](https://astro.build) v7
- TypeScript
- CSS (hand-crafted Windows 98 styles, no external library)
- localStorage (temporary data layer)