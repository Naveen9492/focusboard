import { useState } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Pencil,
  Trash2,
  CalendarDays,
} from "lucide-react";

const TaskList = ({ tasks, onAdd, onEdit, onDelete, onStatusChange }) => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [priority, setPriority] = useState("All");

  const tabs = ["All", "To do", "In progress", "Completed"];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = activeTab === "All" || task.status === activeTab;

    const matchesPriority = priority === "All" || task.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleDelete = (task) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"?`,
    );

    if (confirmed) {
      onDelete(task.id);
    }
  };

  return (
    <section className="task-section">
      <div className="task-heading">
        <div>
          <h2>My tasks</h2>
          <p>Manage and track everything in one place.</p>
        </div>

        <button
          className="primary-button add-task-button"
          type="button"
          onClick={onAdd}
        >
          <Plus size={16} />
          <span>New task</span>
        </button>
      </div>

      <div className="task-toolbar">
        <div className="task-tabs" role="group" aria-label="Filter by status">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
            >
              {tab === "All" ? "All tasks" : tab}
            </button>
          ))}
        </div>

        <div className="task-search">
          <Search size={15} />
          <input
            type="search"
            placeholder="Find a task..."
            aria-label="Search tasks by title"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <select
          className="priority-filter"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
          aria-label="Filter by priority"
        >
          <option value="All">Priority: All</option>
          <option value="High">Priority: High</option>
          <option value="Medium">Priority: Medium</option>
          <option value="Low">Priority: Low</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <Search size={28} />
            <h3>No tasks found</h3>
            <p>Try changing your search or filters.</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <article className="task-row" key={task.id}>
              <div className="task-main">
                <span
                  className={`task-checkbox ${
                    task.status === "Completed" ? "checked" : ""
                  }`}
                >
                  {task.status === "Completed" ? "✓" : ""}
                </span>

                <div className="task-information">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
              </div>

              <span className={`category-badge ${task.category.toLowerCase()}`}>
                {task.category}
              </span>

              <select
                className={`status-select ${task.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
                value={task.status}
                onChange={(event) =>
                  onStatusChange(task.id, event.target.value)
                }
                aria-label={`Status for ${task.title}`}
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>

              <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>

              <span className="due-date">
                <CalendarDays size={13} />
                {new Date(`${task.dueDate}T00:00:00`).toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric" },
                )}
              </span>

              <div className="task-actions">
                <button
                  type="button"
                  onClick={() => onEdit(task)}
                  aria-label={`Edit ${task.title}`}
                >
                  <Pencil size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(task)}
                  aria-label={`Delete ${task.title}`}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="task-footer">
        Showing {filteredTasks.length} of {tasks.length} tasks
        <MoreHorizontal size={18} />
      </div>
    </section>
  );
};

export default TaskList;
