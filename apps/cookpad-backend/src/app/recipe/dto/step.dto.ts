
import { Ingredient, Step } from "@cookpad/cookpad-types";
import { Expose, Transform, Type } from "class-transformer";
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator";
import { IngredientDto } from "./Ingredient.dto";

export class StepDto implements Step {
    @Expose()
    @IsString()
    instruction: string;
    
    @Expose()
    // @IsNumber()
    @Transform((v) => Number(v))
    duration: number;
    
    @Expose()
    @Type(() => IngredientDto)
    @ValidateNested({ each: true })
    ingredients: Ingredient[];
    
    @Expose()
    @Transform((v) => Number(v))
    depend?: number;
}