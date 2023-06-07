export interface Recipe {
    _id?: string
    name: string;
    steps: Step[];
}

export interface Step {
    instruction: string;
    duration: number;
    ingredients: Ingredient[];
    depend?: number;
}

export interface Ingredient {
    name: string;
    amounts: string;
}