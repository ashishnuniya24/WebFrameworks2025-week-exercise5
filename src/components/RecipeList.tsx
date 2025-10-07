import { IRecipeListProps } from '../types/Recipe';
import Recipe from './Recipe';

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div className="recipe-list">
            <h2>Recipes</h2>
            {recipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                <div className="recipes-container">
                    {recipes.map(recipe => (
                        <Recipe key={recipe.id} recipeData={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipeList;