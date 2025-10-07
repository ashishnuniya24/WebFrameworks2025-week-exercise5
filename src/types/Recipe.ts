export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

export interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export interface IRecipeListProps {
    recipes: IRecipe[];
}

export interface IRecipeProps {
    recipeData: IRecipe;
}