import { IRecipeTagListProps } from '../types/Recipe';
import RecipeTag from './RecipeTag';

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
    return (
        <div className="tag-list">
            <h2>Recipe Tags</h2>
            <div className="tags-container">
                {tagList.map((tag, index) => (
                    <RecipeTag 
                        key={index} 
                        tagName={tag} 
                        onSelectTag={onSelectTag} 
                    />
                ))}
            </div>
        </div>
    );
};

export default RecipeTagList;