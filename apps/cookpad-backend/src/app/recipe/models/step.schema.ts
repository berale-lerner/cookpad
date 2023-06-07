import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IngredientSchema } from "./ingredient.schema";

@Schema({ _id: false })
export class Step {
    @Prop({ required: true, trim: true })
    instruction: string;

    @Prop({ type: Number })
    duration: number;

    @Prop({ type: [IngredientSchema] })
    ingredients: number;

    @Prop({ type: Number })
    depend: number;
}

export const StepSchema = SchemaFactory.createForClass(Step);