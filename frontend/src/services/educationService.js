import api from './api';

export async function getEducation(params = {}) {
  const { data } = await api.get('/education', { params });
  return data.data;
}

export async function createEducation(payload) {
  const { data } = await api.post('/education', payload);
  return data.data;
}

export async function updateEducation(id, payload) {
  const { data } = await api.put(`/education/${id}`, payload);
  return data.data;
}

export async function deleteEducation(id) {
  const { data } = await api.delete(`/education/${id}`);
  return data.data;
}
