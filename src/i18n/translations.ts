/**
 * translations.ts
 * UI strings in two languages: English (default) and Indonesian.
 *
 * Usage on the client side:
 *   const lang = localStorage.getItem('win98-lang') ?? 'en';
 *   const t = translations[lang as Lang];
 */

export type Lang = 'en' | 'id';

export interface Translations {
  // App
  appTitle: string;
  appSubtitle: string;

  // Toolbar / filter
  filterAll: string;
  filterActive: string;
  filterCompleted: string;
  filterPriorityHigh: string;
  filterPriorityMedium: string;
  filterPriorityLow: string;
  sortBy: string;
  sortNewest: string;
  sortOldest: string;
  sortPriority: string;
  sortAlpha: string;

  // Add / Edit form
  formAddTitle: string;
  formEditTitle: string;
  labelTitle: string;
  labelDescription: string;
  labelPriority: string;
  priorityHigh: string;
  priorityMedium: string;
  priorityLow: string;
  btnAdd: string;
  onSave: string;
  onCancel: string;

  // Task list
  noTasks: string;
  noTasksFiltered: string;
  btnEdit: string;
  btnDelete: string;

  // Actions
  btnDeleteCompleted: string;
  btnSelectAll: string;
  btnDeselectAll: string;

  // Confirm dialogs
  confirmDelete: string;
  confirmDeleteCompleted: string;

  // Status bar
  statusTotal: string;
  statusCompleted: string;
  statusPending: string;

  // Language switcher
  langLabel: string;
  langEn: string;
  langId: string;

  // Notifications
  notifyAdded: string;
  notifyUpdated: string;
  notifyDeleted: string;
  notifyToggled: string;
  notifyDeletedCompleted: string;
}

export const translations: Record<Lang, Translations> = {
  en: {
    appTitle: 'To Do List',
    appSubtitle: 'Task Manager',

    filterAll: 'All',
    filterActive: 'Active',
    filterCompleted: 'Completed',
    filterPriorityHigh: 'High Priority',
    filterPriorityMedium: 'Medium Priority',
    filterPriorityLow: 'Low Priority',
    sortBy: 'Sort by:',
    sortNewest: 'Newest',
    sortOldest: 'Oldest',
    sortPriority: 'Priority',
    sortAlpha: 'A → Z',

    formAddTitle: 'Add New Task',
    formEditTitle: 'Edit Task',
    labelTitle: 'Title:',
    labelDescription: 'Description:',
    labelPriority: 'Priority:',
    priorityHigh: '🔴 High',
    priorityMedium: '🟡 Medium',
    priorityLow: '🔵 Low',
    btnAdd: 'Add',
    onSave: 'Save',
    onCancel: 'Cancel',

    noTasks: 'No tasks yet. Add one above!',
    noTasksFiltered: 'No tasks match the current filter.',
    btnEdit: '✏️ Edit',
    btnDelete: '🗑️ Delete',

    btnDeleteCompleted: '🗑️ Delete Completed',
    btnSelectAll: 'Select All',
    btnDeselectAll: 'Deselect All',

    confirmDelete: 'Are you sure you want to delete this task?',
    confirmDeleteCompleted: 'Delete all completed tasks?',

    statusTotal: 'Total:',
    statusCompleted: 'Done:',
    statusPending: 'Pending:',

    langLabel: 'Language:',
    langEn: '🇺🇸 English',
    langId: '🇮🇩 Indonesia',

    notifyAdded: 'Task added successfully.',
    notifyUpdated: 'Task updated.',
    notifyDeleted: 'Task deleted.',
    notifyToggled: 'Task status updated.',
    notifyDeletedCompleted: 'Completed tasks deleted.',
  },

  id: {
    appTitle: 'To Do List',
    appSubtitle: 'Pengelola Tugas',

    filterAll: 'Semua',
    filterActive: 'Aktif',
    filterCompleted: 'Selesai',
    filterPriorityHigh: 'Prioritas Tinggi',
    filterPriorityMedium: 'Prioritas Sedang',
    filterPriorityLow: 'Prioritas Rendah',
    sortBy: 'Urutkan:',
    sortNewest: 'Terbaru',
    sortOldest: 'Terlama',
    sortPriority: 'Prioritas',
    sortAlpha: 'A → Z',

    formAddTitle: '{Tambah Tugas Baru}',
    formEditTitle: 'Edit Tugas',
    labelTitle: 'Judul:',
    labelDescription: 'Deskripsi:',
    labelPriority: 'Prioritas:',
    priorityHigh: '🔴 Tinggi',
    priorityMedium: '🟡 Sedang',
    priorityLow: '🔵 Rendah',
    btnAdd: 'Nama',
    onSave: 'Simpan',
    onCancel: 'Batal',

    noTasks: 'Belum ada tugas. Tambahkan di atas!',
    noTasksFiltered: 'Tidak ada tugas yang cocok dengan filter.',
    btnEdit: '✏️ Edit',
    btnDelete: '🗑️ Hapus',

    btnDeleteCompleted: '🗑️ Hapus Selesai',
    btnSelectAll: 'Pilih Semua',
    btnDeselectAll: 'Batalkan Semua',

    confirmDelete: 'Yakin ingin menghapus tugas ini?',
    confirmDeleteCompleted: 'Hapus semua tugas yang sudah selesai?',

    statusTotal: 'Total:',
    statusCompleted: 'Selesai:',
    statusPending: 'Pending:',

    langLabel: 'Bahasa:',
    langEn: '🇺🇸 English',
    langId: '🇮🇩 Indonesia',

    notifyAdded: 'Tugas Successfully ditambahkan.',
    notifyUpdated: 'Tugas Successfully diperbarui.',
    notifyDeleted: 'Tugas Successfully dihapus.',
    notifyToggled: 'Status tugas diperbarui.',
    notifyDeletedCompleted: 'Tugas selesai telah dihapus.',
  },
};