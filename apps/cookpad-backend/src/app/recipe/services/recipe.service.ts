import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from '../../../../../../libs/cookpad-types/src/lib/types/recipe.interface';

@Injectable()
export class RecipeService {
    constructor(
        @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
    ) { }

    async getRecipes(): Promise<Recipe[]> {
        return this.recipeModel.find({ deleted: false }).sort({ createdAt: -1});
    }

    async createRecipe(recipe: Recipe): Promise<Recipe> {
        const createdRecipe = new this.recipeModel(recipe);
        return createdRecipe.save();
    }

    async updateRecipe(recipeId: string, recipe: Recipe): Promise<Recipe> {
        return this.recipeModel.findByIdAndUpdate(recipeId, recipe, { new: true });
    }

    async deleteRecipe(recipeId: string): Promise<boolean> {
        const recipe = await this.recipeModel.findByIdAndUpdate(recipeId, { deleted: true });
        
        if (!recipe) {
            throw new NotFoundException(`recipe ${recipeId} not found`);
        }

        return true
    }
}
