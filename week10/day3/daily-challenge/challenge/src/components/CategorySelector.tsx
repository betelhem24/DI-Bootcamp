import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, selectSelectedCategoryId, selectCategory, addCategory } from '../features/categories/categoriesSlice';
import { RootState } from '../app/store';

const CategorySelector: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state: RootState) => selectCategories(state));
    const selectedCategoryId = useSelector((state: RootState) => selectSelectedCategoryId(state));

    const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(selectCategory(e.target.value));
    }, [dispatch]);

    const handleAddCategory = () => {
        const name = prompt('Enter new category name:');
        if (name) {
            dispatch(addCategory({ id: Date.now().toString(), name }));
        }
    };

    return (
        <div className="category-selector">
            <h2>Categories</h2>
            <select value={selectedCategoryId || ''} onChange={handleCategoryChange}>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button onClick={handleAddCategory} className="btn-add-cat">Add Category</button>
        </div>
    );
};

export default CategorySelector;
