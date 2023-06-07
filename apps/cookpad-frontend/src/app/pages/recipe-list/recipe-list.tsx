import { useEffect, useState } from 'react';
import styles from './recipe-list.module.scss';
import { Recipe } from '@cookpad/cookpad-types';
import { recipeApi } from '../../api/recipe.api';
import RecipeCard from '../../components/recipe-card/recipe-card';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

/* eslint-disable-next-line */
export interface RecipeListProps {}

export function RecipeList(props: RecipeListProps) {
  const [loading, setLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>();
  

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await recipeApi.getRecipes();
        setRecipes(response.data)
      } catch (error) {
        setLoadingFailed(true);
      } finally {
        setLoading(false);
      }
    }

    getRecipes();
  }, []);

  if (loading) {
    return <p>loading recipes...</p>
  }

  if (loadingFailed) {
    return <p>Failed to load recipes, please try again later</p>
  }

  return (
    <div className={styles['container']} style={{margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Link to="/recipe/new">
        <Button type="primary">New Recipe</Button>
      </Link>

      { recipes?.length 
        ? recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>)
        : <div>
          <p>create your first recipe</p>
          <a href="">New Recipe</a>
        </div>
      }
    </div>
  );
}

export default RecipeList;