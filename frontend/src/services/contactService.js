import api from './api';

export async function sendContactMessage(payload) {
  const { data } = await api.post('/contacts', payload);
  return data;
}

export async function getContacts(params = {}) {
  const { data } = await api.get('/contacts', { params });
  return data.data;
}

export async function getContact(id) {
  const { data } = await api.get(`/contacts/${id}`);
  return data.data;
}

export async function markContactAsRead(id) {
  const { data } = await api.patch(`/contacts/${id}/read`);
  return data.data;
}

export async function deleteContact(id) {
  const { data } = await api.delete(`/contacts/${id}`);
  return data.data;
}
