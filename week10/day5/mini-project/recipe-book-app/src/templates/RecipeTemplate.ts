import RecipeCollection from '../model/RecipeCollection';

interface IRecipeTemplate {
  render(collection: RecipeCollection): void;
}

export default class RecipeTemplate implements IRecipeTemplate {
  private container: HTMLElement;

  constructor(containerId: string) {
    const element = document.getElementById(containerId);
    if (!element) {
      throw new Error(`Element with id ${containerId} not found`);
    }
    this.container = element;
  }

  render(collection: RecipeCollection): void {
    this.container.innerHTML = '';

    if (collection.recipes.length === 0) {
      this.container.innerHTML = '<p class="no-recipes">No recipes yet. Add your first recipe!</p>';
      return;
    }

    collection.recipes.forEach(recipe => {
      const recipeCard = this.createRecipeCard(recipe);
      this.container.appendChild(recipeCard);
    });
  }

  private createRecipeCard(recipe: any): HTMLElement {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.dataset.id = recipe.id;

    const header = document.createElement('div');
    header.className = 'recipe-header';

    const title = document.createElement('h3');
    title.textContent = recipe.title;

    const actions = document.createElement('div');
    actions.className = 'recipe-actions';

    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = `favorite-btn ${recipe.isFavorite ? 'active' : ''}`;
    favoriteBtn.innerHTML = recipe.isFavorite ? '★' : '☆';
    favoriteBtn.title = recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.title = 'Delete recipe';

    actions.appendChild(favoriteBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(title);
    header.appendChild(actions);

    const details = document.createElement('div');
    details.className = 'recipe-details';

    const ingredientsSection = document.createElement('div');
    ingredientsSection.className = 'ingredients-section';
    const ingredientsTitle = document.createElement('h4');
    ingredientsTitle.textContent = 'Ingredients:';
    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach((ingredient: string) => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
    ingredientsSection.appendChild(ingredientsTitle);
    ingredientsSection.appendChild(ingredientsList);

    const instructionsSection = document.createElement('div');
    instructionsSection.className = 'instructions-section';
    const instructionsTitle = document.createElement('h4');
    instructionsTitle.textContent = 'Instructions:';
    const instructionsText = document.createElement('p');
    instructionsText.textContent = recipe.instructions;
    instructionsSection.appendChild(instructionsTitle);
    instructionsSection.appendChild(instructionsText);

    details.appendChild(ingredientsSection);
    details.appendChild(instructionsSection);

    card.appendChild(header);
    card.appendChild(details);

    return card;
  }
}