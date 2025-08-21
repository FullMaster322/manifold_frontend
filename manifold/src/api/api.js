import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export async function fetchAiList() {
  try {
    const response = await axios.get(`${BASE_URL}/ailist`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении AI списка:', error);
    return [];
  }
}