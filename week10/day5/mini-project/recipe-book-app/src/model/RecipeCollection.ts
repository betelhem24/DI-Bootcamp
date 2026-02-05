import RecipeItem from './RecipeItem';

interface IRecipeCollection {
  recipes: RecipeItem[];
  addRecipe(recipe: RecipeItem): void;
  removeRecipe(id: string): void;
  toggleFavorite(id: string): void;
  save(): void;
  load(): void;
}

export default class RecipeCollection implements IRecipeCollection {
  private static instance: RecipeCollection;
  private _recipes: RecipeItem[] = [];

  private constructor() {
    this.load();
  }

  static getInstance(): RecipeCollection {
    if (!RecipeCollection.instance) {
      RecipeCollection.instance = new RecipeCollection();
    }
    return RecipeCollection.instance;
  }

  get recipes(): RecipeItem[] {
    return this._recipes;
  }

  addRecipe(recipe: RecipeItem): void {
    this._recipes.push(recipe);
    this.save();
  }

  removeRecipe(id: string): void {
    this._recipes = this._recipes.filter(recipe => recipe.id !== id);
    this.save();
  }

  toggleFavorite(id: string): void {
    const recipe = this._recipes.find(recipe => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.save();
    }
  }

  clearAll(): void {
    this._recipes = [];
    this.save();
  }

  save(): void {
    localStorage.setItem('recipes', JSON.stringify(this._recipes));
  }

  load(): void {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      const parsedRecipes = JSON.parse(storedRecipes);
      this._recipes = parsedRecipes.map(
        (recipe: RecipeItem) =>
          new RecipeItem(
            recipe.id,
            recipe.title,
            recipe.ingredients,
            recipe.instructions,
            recipe.isFavorite
          )
      );
    }
  }
}