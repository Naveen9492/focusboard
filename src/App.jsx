import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverviewCards from "./components/OverviewCards";
import FocusNotes from "./components/FocusNotes";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import sampleTasks from "./data/sampleTasks";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("focusboard_tasks", sampleTasks);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openCreateForm = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  const openEditForm = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const saveTask = (formData) => {
    if (editingTask) {
      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...formData } : task,
        ),
      );
    } else {
      const newTask = {
        id: Date.now(),
        ...formData,
      };

      setTasks((previousTasks) => [newTask, ...previousTasks]);
    }

    closeForm();
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId),
    );
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="dashboard-content">
          <section className="welcome-section">
            <div>
              <h1>Your work, in focus.</h1>
              <p>Plan your day, stay organized, and celebrate small wins.</p>
            </div>

            <button
              type="button"
              className="primary-button desktop-new-task"
              onClick={openCreateForm}
            >
              New task
            </button>
          </section>

          <OverviewCards tasks={tasks} />

          <FocusNotes />

          <TaskList
            tasks={tasks}
            onAdd={openCreateForm}
            onEdit={openEditForm}
            onDelete={deleteTask}
            onStatusChange={updateTaskStatus}
          />
        </div>
      </main>

      {isFormOpen && (
        <TaskForm
          onClose={closeForm}
          onSave={saveTask}
          editingTask={editingTask}
        />
      )}
    </div>
  );
}

export default App;
