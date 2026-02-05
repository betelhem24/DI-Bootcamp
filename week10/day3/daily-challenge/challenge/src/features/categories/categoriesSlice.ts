import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
    id: string;
    name: string;
}

interface CategoriesState {
    categories: Category[];
    selectedCategoryId: string | null;
}

const initialState: CategoriesState = {
    categories: [
        { id: '1', name: 'Work' },
        { id: '2', name: 'Personal' },
        { id: '3', name: 'Study' },
    ],
    selectedCategoryId: '1',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category>) => {
            state.categories.push(action.payload);
        },
        editCategory: (state, action: PayloadAction<{ id: string; name: string }>) => {
            const category = state.categories.find((c) => c.id === action.payload.id);
            if (category) {
                category.name = action.payload.name;
            }
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.filter((c) => c.id !== action.payload);
            if (state.selectedCategoryId === action.payload) {
                state.selectedCategoryId = state.categories[0]?.id || null;
            }
        },
        selectCategory: (state, action: PayloadAction<string>) => {
            state.selectedCategoryId = action.payload;
        },
    },
});

export const { addCategory, editCategory, deleteCategory, selectCategory } = categoriesSlice.actions;

// Selectors
export const selectCategories = (state: { categories: CategoriesState }) => state.categories.categories;
export const selectSelectedCategoryId = (state: { categories: CategoriesState }) => state.categories.selectedCategoryId;
export const selectCategoryById = (state: { categories: CategoriesState }, categoryId: string) =>
    state.categories.categories.find((c) => c.id === categoryId);

export default categoriesSlice.reducer;
