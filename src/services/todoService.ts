/**
 * todoService.ts
 * Service layer for the Todo List app.
 *
 * Currently uses dummy data + localStorage (client-side).
 * When the backend is ready, simply replace the implementation here
 * with fetch() calls — no changes needed in components or pages.
 *
 * Example migration:
 *   const res = await fetch(`${API_BASE}/todos`);
 *   return res.json();
 */

// ===== TYPES =====

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export type CreateTodoDto = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTodoDto = Partial<Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>;

// ===== DUMMY DATA =====

const DUMMY_TODOS: Todo[] = [
  {
    id: '1',
    title: 'Learn Astro Framework',
    description: 'Study island architecture and .astro components',
    completed: true,
    priority: 'high',
    createdAt: '2026-10-28T08:00:00.000Z',
    updatedAt: '2026-10-29T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Install Windows 98',
    description: 'Nostalgia with the legendary Microsoft OS',
    completed: false,
    priority: 'medium',
    createdAt: '2026-10-29T09:00:00.000Z',
    updatedAt: '2026-10-29T09:00:00.000Z',
  },
  {
    id: '3',
    title: 'Build retro UI',
    description: 'Apply Windows 98 CSS to the Astro project',
    completed: false,
    priority: 'high',
    createdAt: '2026-10-30T07:30:00.000Z',
    updatedAt: '2026-10-30T07:30:00.000Z',
  },
  {
    id: '4',
    title: 'Buy a floppy disk',
    description: 'Find one at a vintage computer shop',
    completed: false,
    priority: 'low',
    createdAt: '2026-10-31T11:00:00.000Z',
    updatedAt: '2026-10-31T11:00:00.000Z',
  },
  {
    id: '5',
    title: 'Set up backend API',
    description: 'Create REST API to replace this dummy data',
    completed: false,
    priority: 'medium',
    createdAt: '2026-11-01T08:00:00.000Z',
    updatedAt: '2026-11-01T08:00:00.000Z',
  },
];

const STORAGE_KEY = 'win98-todos';

// ===== STORAGE HELPERS (Client-side only) =====

function loadFromStorage(): Todo[] {
  if (typeof window === 'undefined') return DUMMY_TODOS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Todo[];
  } catch {
    // Corrupt data — reset to defaults
  }
  // First run: seed with dummy data
  saveToStorage(DUMMY_TODOS);
  return DUMMY_TODOS;
}

function saveToStorage(todos: Todo[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ===== SERVICE API =====
// All methods are grouped inside `todoService` so they can be swapped
// with a fetch-based implementation once the backend is ready.
//
// Migration example:
//   async getAll() {
//     const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/todos`);
//     if (!res.ok) throw new Error('Failed to fetch todos');
//     return res.json() as Promise<Todo[]>;
//   }

export const todoService = {
  /**
   * Retrieve all todos.
   * Future API: GET /api/todos
   */
  getAll(): Todo[] {
    return loadFromStorage();
  },

  /**
   * Retrieve a single todo by id.
   * Future API: GET /api/todos/:id
   */
  getById(id: string): Todo | undefined {
    return loadFromStorage().find((t) => t.id === id);
  },

  /**
   * Create a new todo.
   * Future API: POST /api/todos
   */
  create(dto: CreateTodoDto): Todo {
    const todos = loadFromStorage();
    const now = new Date().toISOString();
    const newTodo: Todo = {
      ...dto,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
    };
    todos.unshift(newTodo); // prepend so newest appears first
    saveToStorage(todos);
    return newTodo;
  },

  /**
   * Partially update a todo (PATCH semantics).
   * Future API: PATCH /api/todos/:id
   */
  update(id: string, dto: UpdateTodoDto): Todo | null {
    const todos = loadFromStorage();
    const idx = todos.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    todos[idx] = {
      ...todos[idx],
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    saveToStorage(todos);
    return todos[idx];
  },

  /**
   * Toggle the completed status of a todo.
   * Future API: PATCH /api/todos/:id/toggle
   */
  toggle(id: string): Todo | null {
    const todo = this.getById(id);
    if (!todo) return null;
    return this.update(id, { completed: !todo.completed });
  },

  /**
   * Delete a todo by id.
   * Future API: DELETE /api/todos/:id
   */
  delete(id: string): boolean {
    const todos = loadFromStorage();
    const idx = todos.findIndex((t) => t.id === id);
    if (idx === -1) return false;
    todos.splice(idx, 1);
    saveToStorage(todos);
    return true;
  },

  /**
   * Delete all completed todos.
   * Future API: DELETE /api/todos/completed
   */
  deleteCompleted(): number {
    const todos = loadFromStorage();
    const before = todos.length;
    const filtered = todos.filter((t) => !t.completed);
    saveToStorage(filtered);
    return before - filtered.length;
  },

  /**
   * Return a summary of todo counts.
   */
  getStats(): { total: number; completed: number; pending: number } {
    const todos = loadFromStorage();
    const completed = todos.filter((t) => t.completed).length;
    return {
      total: todos.length,
      completed,
      pending: todos.length - completed,
    };
  },
};
