export const Modules = [
  {
    name: "Notes",
    key: "notes",
    icon: "note",
    loader: () => import('./modules/notes.js'),
    svg: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/></svg>`
  },
  {
    name: "Tâches",
    key: "tasks",
    icon: "tasks",
    loader: () => import('./modules/tasks.js'),
    svg: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 9l2 2 4-4"/><line x1="7" y1="17" x2="17" y2="17"/></svg>`
  },
  {
    name: "Calendrier",
    key: "calendar",
    icon: "calendar",
    loader: () => import('./modules/calendar.js'),
    svg: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>`
  },
  {
    name: "Markdown",
    key: "markdown",
    icon: "markdown",
    loader: () => import('./modules/markdown.js'),
    svg: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12v4M8 16l2-2 2 2V8"/><line x1="16" y1="12" x2="16" y2="16"/><line x1="14" y1="16" x2="18" y2="16"/></svg>`
  },
  {
    name: "Fichiers",
    key: "files",
    icon: "files",
    loader: () => import('./modules/files.js'),
    svg: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="3" width="12" height="18" rx="2"/><polyline points="9 7 12 10 15 7"/></svg>`
  },
  {
    name: "Kanban",
    key: "kanban",
    icon: "kanban",
    loader: () => import('./modules/kanban.js'),
    svg: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="5" height="14" rx="2"/><rect x="10" y="5" width="5" height="14" rx="2"/><rect x="17" y="5" width="4" height="14" rx="2"/></svg>`
  }
];