import { Document } from 'mongoose';
import { Recipe as IRecipe, Step } from '@cookpad/cookpad-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { StepSchema } from './step.schema';

export type RecipeDocument = Recipe & Document;

@Schema({ timestamps: true })
export class Recipe implements IRecipe {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: [StepSchema], required: true, })
  steps: Step[];

  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
