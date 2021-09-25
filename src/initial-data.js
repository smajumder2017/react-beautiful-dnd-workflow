export const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "One task" },
    "task-2": { id: "task-2", content: "two task" },
    "task-3": { id: "task-3", content: "three task" },
    "task-4": { id: "task-4", content: "Four task" },
    "task-5": { id: "task-5", content: "Five task" },
    "task-6": { id: "task-6", content: "Six task" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "in Progress",
      taskIds: ["task-5", "task-6"]
    }
  },
  columnOrder: ["column-1", "column-2"]
};
