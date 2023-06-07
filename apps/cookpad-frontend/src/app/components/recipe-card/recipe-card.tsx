import { Recipe } from '@cookpad/cookpad-types';
import styles from './recipe-card.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

/* eslint-disable-next-line */
export interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard(props: RecipeCardProps) {
  const { recipe } = props;
  const ingredients = recipe.steps.flatMap(step => step.ingredients);
  const navigate = useNavigate();

  const navigateToCookingModePage = () => {
    navigate('/cooking-mode', { state: { recipe }, replace: true });
  }
 
  return (
    <div className={styles['container']} style={{backgroundColor: '#ebebeb', border: '1px solid black', borderRadius: '20px', padding: '10px 10px', minWidth: '500px', margin: '10px 0'}}>
      <br />

      <h2>{recipe.name}</h2>

      <br />
      <p>ingredients:</p>
      <ul>
        {ingredients.map((ingredient, i) => <li key={i  }>{ingredient.name} - {ingredient.amounts}</li>)}
      </ul>
      <br />
      <p>Steps:</p>
      {
        recipe.steps.map((step, i) => <div key={i }>
          <span> {step.instruction} - </span>
          {step.duration ? <span>{step.duration} minutes ⏰</span> : ''}
        </div>)
      }
        <Button onClick={navigateToCookingModePage} type="primary">Start Cooking Mode</Button>
      <br />
    </div>
  );
}

export default RecipeCard;
