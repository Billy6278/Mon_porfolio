import api from './api';

export async function getSkills(params = {}) {
  const { data } = await api.get('/skills', { params });
  return data.data;
}

export async function getSkillById(id) {
  const { data } = await api.get(`/skills/${id}`);
  return data.data;
}

export async function createSkill(payload) {
  const { data } = await api.post('/skills', payload);
  return data.data;
}

export async function updateSkill(id, payload) {
  const { data } = await api.put(`/skills/${id}`, payload);
  return data.data;
}

export async function deleteSkill(id) {
  const { data } = await api.delete(`/skills/${id}`);
  return data.data;
}
