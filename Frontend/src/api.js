const API_BASE = "http://localhost:3000";

const request = async (path, options = {}) => {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
};

export const authAPI = {
  register: (name, email, password) =>
    request("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    }),
  login: (email, password) =>
    request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
};

export const taskAPI = {
  getTasks: () => request("/api/task/get-task"),
  createTask: (title, description, status = "pending", date) =>
    request("/api/task/create-task", {
      method: "POST",
      body: JSON.stringify({ title, description, status, date: date || new Date().toISOString() }),
    }),
  updateTask: (id, title, description, status) =>
    request(`/api/task/update-task/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, status }),
    }),
  deleteTask: (id) =>
    request(`/api/task/delete-task/${id}`, { method: "DELETE" }),
};
