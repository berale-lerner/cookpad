import { Ingredient } from "@cookpad/cookpad-types";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class IngredientDto implements Ingredient {
    @Expose()
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @Expose()
    @IsString()
    @IsNotEmpty()
    amounts: string;
}