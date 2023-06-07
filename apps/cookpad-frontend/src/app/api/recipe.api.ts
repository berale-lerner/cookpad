import { Recipe } from '@cookpad/cookpad-types'
import axios, { AxiosResponse } from 'axios';

class RecipeApi {
    getRecipes(): Promise<AxiosResponse<Recipe[]>> {
        return axios.get<Recipe[]>(`api/recipe`);
    }

    async createRecipe(recipe: Recipe): Promise<AxiosResponse<Recipe[]>> {
        return axios.post<Recipe[]>(`api/recipe`, recipe);
    }
}

const recipeApi = new RecipeApi();
export { recipeApi };