import api from './api';

export async function getProjects(params = {}) {
  const { data } = await api.get('/projects', { params });
  return data.data;
}

export async function getProjectById(id) {
  const { data } = await api.get(`/projects/${id}`);
  return data.data;
}

export async function createProject(payload) {
  const { data } = await api.post('/projects', payload);
  return data.data;
}

export async function updateProject(id, payload) {
  const { data } = await api.put(`/projects/${id}`, payload);
  return data.data;
}

export async function deleteProject(id) {
  const { data } = await api.delete(`/projects/${id}`);
  return data.data;
}

export async function getFeaturedProjects() {
  return getProjects({ featured: true });
}
