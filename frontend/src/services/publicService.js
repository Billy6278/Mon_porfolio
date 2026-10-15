import api from './api';

export async function getPublicProfile() {
  const { data } = await api.get('/public/profile');
  return data.data || {};
}

export async function getPublicSettings() {
  const { data } = await api.get('/public/settings');
  return data.data || {};
}
