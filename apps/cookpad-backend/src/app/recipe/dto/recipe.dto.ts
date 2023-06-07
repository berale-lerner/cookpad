import { Recipe, Step } from '@cookpad/cookpad-types';
import { Expose, Type } from 'class-transformer';
import { IsString, IsNotEmpty, ValidatePromise, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { StepDto } from './step.dto';

export class RecipeDto implements Recipe {
    @Expose()
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @Expose()
    @ValidateNested({ each: true })
    @Type(() => StepDto)
    steps: Step[];
}