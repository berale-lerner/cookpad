import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Recipe } from '@cookpad/cookpad-types';
// import { Recipe } from '../../../../../../libs/cookpad-types/src/lib/types/recipe.interface';
import { RecipeService } from '../services/recipe.service';
import { RecipeDto } from '../dto/recipe.dto';

@Controller('recipe')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) { }

    @Get()
    getAllRecipes(): Promise<Recipe[]> {
        return this.recipeService.getRecipes();
    }

    @Post()
    createRecipe(@Body() recipe: RecipeDto): Promise<Recipe> {
        return this.recipeService.createRecipe(recipe);
    }
    
    @Put('/:id')
    updateRecipe(@Body() recipe: RecipeDto, @Param('id') recipeId: string): Promise<Recipe> {
        return this.recipeService.updateRecipe(recipeId, recipe);
    }

    @Delete('/:id')
    deleteRecipe(@Param('id') recipeId: string): Promise<boolean> {
        return this.recipeService.deleteRecipe(recipeId);
    }
}
