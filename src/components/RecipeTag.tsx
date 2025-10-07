import { IRecipeTagProps } from '../types/Recipe';

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    const handleClick = () => {
        onSelectTag(tagName);
    };

    return (
        <button className="recipe-tag" onClick={handleClick}>
            {tagName}
        </button>
    );
};

export default RecipeTag;