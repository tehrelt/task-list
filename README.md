# Task List Application

A modern task management application built with React, TypeScript, and Vite, featuring a comprehensive task storage system using React Context.

## Features

- **Task Management**: Create, read, update, and delete tasks
- **Task Properties**: Each task has title, description, status, priority, and category
- **Status Tracking**: Tasks can be marked as "todo", "in-progress", or "done"
- **Priority Levels**: Low, medium, and high priority options
- **Categories**: Bug, feature, documentation, refactor, and test categories
- **Persistent Storage**: Tasks are automatically saved to localStorage
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Type Safety**: Full TypeScript support with proper type definitions

## Architecture

### Task Storage with React Context

The application uses React Context for state management with the following structure:

```
src/storage/
├── task-context.ts      # Context definition
├── tasks.tsx           # TaskProvider component
├── use-task-context.ts # Custom hook for using context
└── task-utils.ts       # Utility functions
```

#### Key Components:

1. **TaskProvider** (`tasks.tsx`): The main context provider that manages task state
2. **useTaskContext** (`use-task-context.ts`): Custom hook for accessing task context
3. **TaskContext** (`task-context.ts`): React context definition
4. **Task Utils** (`task-utils.ts`): Helper functions for task management

### State Management

The application uses a reducer pattern with the following actions:

- `ADD_TASK`: Add a new task
- `UPDATE_TASK`: Update an existing task
- `DELETE_TASK`: Delete a task by ID
- `LOAD_TASKS`: Load tasks from localStorage
- `CLEAR_TASKS`: Clear all tasks

### Data Persistence

Tasks are automatically persisted to localStorage using the key `task-list-tasks`. The data is loaded on application startup and saved whenever tasks are modified.

## Task Structure

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  category: "bug" | "feature" | "documentation" | "refactor" | "test";
}
```

## Usage

### Setting up the TaskProvider

Wrap your application with the TaskProvider:

```tsx
import { TaskProvider } from "./storage/tasks";

function App() {
  return <TaskProvider>{/* Your app components */}</TaskProvider>;
}
```

### Using the Task Context

Use the `useTaskContext` hook in your components:

```tsx
import { useTaskContext } from "./storage/use-task-context";

function MyComponent() {
  const { state, addTask, updateTask, deleteTask } = useTaskContext();

  // Access tasks
  const { tasks } = state;

  // Add a new task
  const handleAddTask = () => {
    addTask({
      title: "New Task",
      description: "Task description",
      status: "todo",
      priority: "medium",
      category: "feature",
    });
  };

  // Update a task
  const handleUpdateTask = (task) => {
    updateTask({ ...task, status: "done" });
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    deleteTask(id);
  };
}
```

### Available Context Methods

- `addTask(task)`: Add a new task (ID is automatically generated)
- `updateTask(task)`: Update an existing task
- `deleteTask(id)`: Delete a task by ID
- `getTaskById(id)`: Get a specific task by ID
- `getTasksByStatus(status)`: Get all tasks with a specific status
- `getTasksByPriority(priority)`: Get all tasks with a specific priority
- `getTasksByCategory(category)`: Get all tasks with a specific category
- `clearTasks()`: Clear all tasks

## Components

### TaskList Component

The main component that displays all tasks and provides the add task form.

### TaskItem Component

A reusable component for displaying individual tasks with status updates and delete functionality.

## Styling

The application uses Tailwind CSS for styling with custom color schemes for different task properties:

- **Status Colors**: Gray (todo), Blue (in-progress), Green (done)
- **Priority Colors**: Green (low), Yellow (medium), Red (high)
- **Category Colors**: Red (bug), Blue (feature), Purple (documentation), Orange (refactor), Green (test)

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd task-list
npm install
```

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## File Structure

```
src/
├── app/
│   └── routes-config.tsx
├── components/
│   ├── task-list.tsx
│   └── task-item.tsx
├── entities/
│   └── task.ts
├── pages/
│   └── task-list.tsx
├── storage/
│   ├── task-context.ts
│   ├── tasks.tsx
│   ├── use-task-context.ts
│   └── task-utils.ts
└── App.tsx
```

## Benefits of This Architecture

1. **Centralized State Management**: All task-related state is managed in one place
2. **Type Safety**: Full TypeScript support ensures data consistency
3. **Persistence**: Automatic localStorage integration
4. **Reusability**: Context can be used across multiple components
5. **Performance**: Efficient updates with reducer pattern
6. **Maintainability**: Clean separation of concerns
7. **Scalability**: Easy to extend with new features

## Future Enhancements

- Task filtering and sorting
- Task search functionality
- Task categories and tags
- Due dates and reminders
- Task assignments and collaboration
- Export/import functionality
- Cloud synchronization
