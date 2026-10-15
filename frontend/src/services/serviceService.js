import api from './api';

export async function getServices(params = {}) {
  const { data } = await api.get('/services', { params });
  return data.data;
}

export async function createService(payload) {
  const { data } = await api.post('/services', payload);
  return data.data;
}

export async function updateService(id, payload) {
  const { data } = await api.put(`/services/${id}`, payload);
  return data.data;
}

export async function deleteService(id) {
  const { data } = await api.delete(`/services/${id}`);
  return data.data;
}
