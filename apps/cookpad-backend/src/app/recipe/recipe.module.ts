import { Module } from '@nestjs/common';
import { RecipeService } from './services/recipe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema } from './models/recipe.model';
import { RecipeController } from './controllers/recipe.controller';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema }]),
    ],
  providers: [RecipeService],
  controllers: [RecipeController]
  
})
export class RecipeModule {}
