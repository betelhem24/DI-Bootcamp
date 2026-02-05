// Define the structure for a Recipe
export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

// Define the API response structure
export interface RecipeApiResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

// Generic state interface for Redux
export interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}