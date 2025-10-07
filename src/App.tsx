import { useState, useEffect } from 'react';
import RecipeTagList from './components/RecipeTagList';
import RecipeList from './components/RecipeList';
import { IRecipe } from './types/Recipe';
import './App.css';

interface RecipeResponse {
  recipes: IRecipe[];
}

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(true);

  // Load tags on component mount
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes/tags');
        const data: string[] = await response.json();
        setTags(data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  // Load recipes when a tag is selected
  useEffect(() => {
    const fetchRecipes = async () => {
      if (!selectedTag) return;

      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
        const data: RecipeResponse = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedTag) {
      fetchRecipes();
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div className="app">
      <h1>ACME Recipe O'Master</h1>
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {selectedTag && (
            <button onClick={handleBackToTags} className="back-button">
              ← Back to Tags
            </button>
          )}
          
          {!selectedTag ? (
            <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
          ) : (
            <RecipeList recipes={recipes} />
          )}
        </>
      )}
    </div>
  );
}

export default App;