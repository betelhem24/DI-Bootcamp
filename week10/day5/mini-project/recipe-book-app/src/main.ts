import './style.css';
import RecipeItem from './model/RecipeItem';
import RecipeCollection from './model/RecipeCollection';
import RecipeTemplate from './templates/RecipeTemplate';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="recipe-app">
    <h1>📖 Recipe Book</h1>
    
    <form id="recipeEntryForm">
      <input type="text" id="recipeTitle" placeholder="Recipe Title" required />
      <textarea
        id="ingredients"
        placeholder="Enter ingredients (one per line)"
        rows="4"
        required
      ></textarea>
      <textarea
        id="instructions"
        placeholder="Enter cooking instructions"
        rows="6"
        required
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>

    <div id="recipeContainer"></div>

    <button id="clearRecipesButton">Clear All Recipes</button>
  </div>
`;

// Initialize application
const recipeCollection = RecipeCollection.getInstance();
const recipeTemplate = new RecipeTemplate('recipeContainer');

// Initial render
recipeTemplate.render(recipeCollection);

// Form submission handler
const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;

  const title = titleInput.value.trim();
  const ingredients = ingredientsInput.value
    .split('\n')
    .map(ing => ing.trim())
    .filter(ing => ing.length > 0);
  const instructions = instructionsInput.value.trim();

  if (title && ingredients.length > 0 && instructions) {
    const newRecipe = new RecipeItem(
      undefined,
      title,
      ingredients,
      instructions,
      false
    );

    recipeCollection.addRecipe(newRecipe);
    recipeTemplate.render(recipeCollection);

    // Clear form
    form.reset();
    titleInput.focus();
  }
});

// Event delegation for recipe actions
const recipeContainer = document.getElementById('recipeContainer');
recipeContainer?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const card = target.closest('.recipe-card') as HTMLElement;

  if (!card) return;

  const recipeId = card.dataset.id;
  if (!recipeId) return;

  if (target.classList.contains('favorite-btn')) {
    recipeCollection.toggleFavorite(recipeId);
    recipeTemplate.render(recipeCollection);
  }

  if (target.classList.contains('delete-btn')) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      recipeCollection.removeRecipe(recipeId);
      recipeTemplate.render(recipeCollection);
    }
  }
});

// Clear all recipes
const clearButton = document.getElementById('clearRecipesButton');
clearButton?.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all recipes? This cannot be undone.')) {
    recipeCollection.clearAll();
    recipeTemplate.render(recipeCollection);
  }
});