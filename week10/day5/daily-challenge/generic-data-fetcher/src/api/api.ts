// src/api/api.ts
import axios from 'axios';
import { RecipeApiResponse } from '../types/types';

// Point to your backend instead
const API_BASE_URL = 'http://localhost:3001/api';

export const fetchData = async <T,>(endpoint: string): Promise<T> => {
  try {
    const response = await axios.get<T>(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch data');
    }
    throw new Error('An unexpected error occurred');
  }
};

export const fetchRecipes = async (
  query: string = 'pasta',
  number: number = 10
): Promise<RecipeApiResponse> => {
  return fetchData<RecipeApiResponse>(
    `/recipes?query=${query}&number=${number}`
  );
};