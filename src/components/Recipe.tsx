import { IRecipeProps } from '../types/Recipe';

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div className="recipe-card">
            <h3 className="recipe-name">{recipeData.name}</h3>
            
            <div className="recipe-meta">
                <span className="cuisine">{recipeData.cuisine}</span>
                <span className="difficulty">Difficulty: {recipeData.difficulty}</span>
                <span className="rating">⭐ {recipeData.rating} ({recipeData.reviewCount} reviews)</span>
            </div>

            <div className="recipe-details">
                <div className="time-info">
                    <p>Prep: {recipeData.prepTimeMinutes} min</p>
                    <p>Cook: {recipeData.cookTimeMinutes} min</p>
                    <p>Servings: {recipeData.servings}</p>
                    <p>Calories: {recipeData.caloriesPerServing} per serving</p>
                </div>
            </div>

            <div className="ingredients-section">
                <h4>Ingredients:</h4>
                <ul className="ingredients-list">
                    {recipeData.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="instructions-section">
                <h4>Instructions:</h4>
                <ol className="instructions-list">
                    {recipeData.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>

            <div className="recipe-tags">
                {recipeData.tags.map((tag, index) => (
                    <span key={index} className="recipe-tag-small">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default Recipe;