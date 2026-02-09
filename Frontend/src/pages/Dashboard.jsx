import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { taskAPI } from "../api";
import "./Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", status: "pending" });

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await taskAPI.getTasks();
      setTasks(res.task || []);
    } catch (err) {
      setError(err.message || "Could not load tasks");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const resetForm = () => {
    setForm({ title: "", description: "", status: "pending" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setError("");
    try {
      await taskAPI.createTask(form.title.trim(), form.description.trim(), form.status);
      resetForm();
      loadTasks();
    } catch (err) {
      setError(err.message || "Could not create task");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingId || !form.title.trim()) return;
    setError("");
    try {
      await taskAPI.updateTask(editingId, form.title.trim(), form.description.trim(), form.status);
      resetForm();
      loadTasks();
    } catch (err) {
      setError(err.message || "Could not update task");
    }
  };

  const startEdit = (task) => {
    setForm({
      title: task.title,
      description: task.description || "",
      status: task.status || "pending",
    });
    setEditingId(task._id);
    setShowForm(true);
  };

  const toggleStatus = async (task) => {
    const newStatus = task.status === "complete" ? "pending" : "complete";
    setError("");
    try {
      await taskAPI.updateTask(task._id, task.title, task.description || "", newStatus);
      loadTasks();
    } catch (err) {
      setError(err.message || "Could not update status");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this task?")) return;
    setError("");
    try {
      await taskAPI.deleteTask(id);
      loadTasks();
      if (editingId === id) resetForm();
    } catch (err) {
      setError(err.message || "Could not delete task");
    }
  };

  const onSubmit = editingId ? handleUpdate : handleCreate;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Task Manager</h1>
        <div className="header-actions">
          <Link to="/login" className="link-btn">Login</Link>
          <Link to="/register" className="link-btn">Register</Link>
        </div>
      </header>

      {error && <div className="dashboard-error">{error}</div>}

      <div className="dashboard-actions">
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            resetForm();
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Cancel" : "Add Task"}
        </button>
      </div>

      {showForm && (
        <form className="task-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Task title"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
          <textarea
            placeholder="Description (optional)"
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            rows={2}
          />
          <select
            value={form.status}
            onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
          >
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
          </select>
          <button type="submit" className="btn-primary">
            {editingId ? "Update Task" : "Create Task"}
          </button>
        </form>
      )}

      {loading ? (
        <p className="loading">Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p className="empty">No tasks yet. Add one above.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className={`task-item ${task.status === "complete" ? "done" : ""}`}>
              <div className="task-main">
                <input
                  type="checkbox"
                  checked={task.status === "complete"}
                  onChange={() => toggleStatus(task)}
                  className="task-check"
                />
                <div className="task-content">
                  <span className="task-title">{task.title}</span>
                  {task.description && (
                    <span className="task-desc">{task.description}</span>
                  )}
                  {task.date && (
                    <span className="task-date">
                      {new Date(task.date).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="task-buttons">
                <button type="button" className="btn-edit" onClick={() => startEdit(task)}>
                  Edit
                </button>
                <button type="button" className="btn-delete" onClick={() => handleDelete(task._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
