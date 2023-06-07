import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Ingredient {
    @Prop({ required: true, trim: true })
    name: string;

    @Prop({ type: String, trim: true, required: true })
    amounts: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);