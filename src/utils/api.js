// Simple API client using fetch with base URL and auth token support
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function getHeaders(auth = true) {
  // When using cookie-based auth, we don't attach Authorization header from localStorage
  return { 'Content-Type': 'application/json' };
}

async function request(path, { method = 'GET', body, auth = true } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: getHeaders(auth),
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || 'Request failed';
    throw new Error(message);
  }
  return data;
}

// Auth endpoints
export const api = {
  login: (email, password) => request('/api/users/login', { method: 'POST', body: { email, password }, auth: false }),
  register: (name, email, password) => request('/api/users/register', { method: 'POST', body: { name, email, password }, auth: false }),
  profile: () => request('/api/users/profile'),
  updateProfile: (payload) => request('/api/users/profile', { method: 'PUT', body: payload }),
  logout: () => request('/api/users/logout', { method: 'POST', auth: false }),

  // Skills CRUD
  // include auth header when available so backend can validate and return user-specific info
  getSkills: () => request('/api/skills', { auth: true }),
  createSkill: (payload) => request('/api/skills', { method: 'POST', body: payload }),
  updateSkill: (id, payload) => request(`/api/skills/${id}`, { method: 'PUT', body: payload }),
  deleteSkill: (id) => request(`/api/skills/${id}`, { method: 'DELETE' }),
};

export default api;
