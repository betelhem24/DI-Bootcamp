import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import DataFetcher from './components/DataFetcher';
import { fetchRecipes } from './api/api';
import { RecipeApiResponse, Recipe } from './types/types';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="app-header">
          <h1>🍝 Generic Data Fetcher: Recipe Explorer</h1>
          <p>Fetching recipes using TypeScript Generics & Redux</p>
        </header>

        <main className="app-main">
          <DataFetcher<RecipeApiResponse>
            fetchFunction={() => fetchRecipes('pasta', 12)}
            renderData={(data) => (
              <div className="recipes-grid">
                <h2>Found {data.totalResults} Recipes</h2>
                <div className="recipe-list">
                  {data.results.map((recipe: Recipe) => (
                    <div key={recipe.id} className="recipe-card">
                      <img 
                        src={recipe.image} 
                        alt={recipe.title}
                        loading="lazy"
                      />
                      <h3>{recipe.title}</h3>
                      <p className="recipe-id">ID: {recipe.id}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            renderLoading={() => (
              <div className="custom-loading">
                <div className="spinner"></div>
                <p>Fetching delicious recipes...</p>
              </div>
            )}
            renderError={(error) => (
              <div className="custom-error">
                <h2>⚠️ Oops!</h2>
                <p>{error}</p>
                <p className="error-hint">
                  Make sure you've added your Spoonacular API key in src/api/api.ts
                </p>
              </div>
            )}
          />
        </main>
      </div>
    </Provider>
  );
}

export default App;