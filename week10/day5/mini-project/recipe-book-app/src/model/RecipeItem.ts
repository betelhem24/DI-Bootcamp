import { v4 as uuidv4 } from 'uuid';

export interface IRecipeItem {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;
}

export default class RecipeItem implements IRecipeItem {
  constructor(
    public id: string = uuidv4(),
    public title: string = '',
    public ingredients: string[] = [],
    public instructions: string = '',
    public isFavorite: boolean = false
  ) {}
}