# FocusBoard – Task Management Dashboard

## 1. Project Overview

FocusBoard is a responsive task management dashboard built using React. It helps users organize their daily activities, manage tasks, track progress, and stay focused on their priorities.

The main objective of this project is to provide a simple and user-friendly interface where users can create, view, update, and delete tasks while monitoring their overall task progress.

## 2. Technology Stack

- **Frontend:** React.js
- **Programming Language:** JavaScript
- **Styling:** CSS3
- **State Management:** React Hooks (`useState`)
- **Data Persistence:** Browser `localStorage`
- **Build Tool:** Vite (if used in this project)

## 3. Key Features

- Responsive dashboard layout for desktop and mobile devices.
- Overview cards displaying task statistics.
- Create new tasks.
- Edit existing tasks.
- Delete tasks.
- Track task progress and status.
- Focus Notes section for highlighting important tasks.
- Persistent task data using browser localStorage.
- Responsive navigation and layout.

## 4. Project Folder Structure

The following is an example structure. Update it to match your actual project files.

```text
focusboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── OverviewCards.jsx
│   │   ├── FocusNotes.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskForm.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── data/
│   │   └── sampleTasks.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 5. Installation

Make sure Node.js and npm are installed on your system.

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd focusboard
```

Install the dependencies:

```bash
npm install
```

## 6. Run the Project Locally

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal (usually `http://localhost:5173`) in your browser.

## 7. State Management

FocusBoard uses React's built-in Hooks for state management instead of an external state management library.

### Task Data Management

Task data is maintained in the main `App` component using a custom `useLocalStorage` hook.

The application initializes the task state using previously saved localStorage data. If no saved data is available, it uses the initial sample task data.

### CRUD Operations

The application supports the following operations:

- **Create:** Adds a new task to the existing task list.
- **Read:** Displays tasks using the current task state.
- **Update:** Updates an existing task using its identifier.
- **Delete:** Removes a selected task from the task list.

React state updates trigger re-rendering, allowing the dashboard to display the latest task information.

### Derived Statistics and Filters

Dashboard statistics are calculated from the current task data rather than maintained as separate, duplicated state.

For example, completed tasks, pending tasks, and overall task counts are derived from the task list.

Task filters, where implemented, use the current task data to display the relevant tasks.

### localStorage Synchronization

The custom `useLocalStorage` hook synchronizes task state with the browser's localStorage.

Whenever the task state changes, the updated data is saved in localStorage. When the application is reopened or refreshed, the saved data is loaded again.

This allows task information to persist between browser sessions on the same browser and device.

### Carousel / Focus Notes State

Any carousel or navigation state used in the Focus Notes section is maintained separately from the task data using React state.

Changing the active item updates the relevant component without unnecessarily modifying the task list.

## 8. Data Persistence

FocusBoard uses browser localStorage to persist task information.

- Task data is stored in the browser.
- Data remains available after refreshing the page.
- Saved data is loaded when the application initializes.
- Data is specific to the browser and device being used.

No backend API or external database is currently required.

## 9. Hosted Application

**Live Demo:** YOUR_HOSTED_APPLICATION_URL

## 10. GitHub Repository

**Source Code:** YOUR_GITHUB_REPOSITORY_URL

## 11. Known Limitations and Future Improvements

- Task data is stored locally in the browser and is not synchronized across multiple devices.
- There is no backend database or user authentication.
- Clearing browser localStorage removes the saved task data.
- Multi-user collaboration and real-time task synchronization are not currently supported.
- Additional task filtering, sorting, and advanced productivity features can be added in future versions.

## 12. Conclusion

FocusBoard demonstrates the implementation of a responsive task management dashboard using React, reusable components, React Hooks, CRUD operations, and browser localStorage.

The project focuses on component-based development, state management, data persistence, and responsive user interface design.
