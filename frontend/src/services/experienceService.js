import api from './api';

export async function getExperiences(params = {}) {
  const { data } = await api.get('/experience', { params });
  return data.data;
}

export async function createExperience(payload) {
  const { data } = await api.post('/experience', payload);
  return data.data;
}

export async function updateExperience(id, payload) {
  const { data } = await api.put(`/experience/${id}`, payload);
  return data.data;
}

export async function deleteExperience(id) {
  const { data } = await api.delete(`/experience/${id}`);
  return data.data;
}
