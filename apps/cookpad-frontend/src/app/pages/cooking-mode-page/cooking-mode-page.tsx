import { Recipe } from '@cookpad/cookpad-types';
import styles from './cooking-mode-page.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd';
import { useNextButtonDisable } from '../../hooks/next-disalble.hook';
import { useAsyncStep } from '../../hooks/async-step.hook';


export function CookingModePage() {
  const { state } = useLocation();
  const recipe = state.recipe as Recipe;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { currentAsyncStep, resetTimer } = useAsyncStep(recipe.steps, currentStepIndex);
  const disable = useNextButtonDisable(recipe.steps, currentStepIndex, currentAsyncStep);

  const next = () => {
    const nextStep = recipe.steps[currentStepIndex + 1];
    let nextStepIndex;

    if (nextStep.depend === undefined || nextStep.depend !== currentAsyncStep) {
      nextStepIndex = currentStepIndex + 1;
    }

    setCurrentStepIndex(currentStepIndex + 1);
  }

  if (currentStepIndex === recipe.steps.length - 1) {
    return <div style={{ margin: 'auto 0', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}>
      <p>Recipe done 🎉</p>
      <Link to="/">
        <Button type="primary">Home Page</Button>
      </Link>
    </div>
  }

  const step = recipe.steps[currentStepIndex];

  return (
    <div className={styles['container']} style={{ margin: 'auto 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
      <h2>Cooking Mode</h2>
      <h1>{ recipe.name }</h1>
      
      <div>
        <span> {step.instruction} - </span>
        {step.duration ? <span>{step.duration} minutes ⏰</span> : ''}

        {step.ingredients.map((ingredient, i) => <li key={i  }>{ingredient.name} - {ingredient.amounts}</li>)}

      </div>
      <br />
      <Button disabled={disable} onClick={next} type="primary">Next</Button>
      {disable ? <p>Please wait for the running step to finish...</p> : '' }
      

      {currentAsyncStep !== null 
      ? <div style={{ margin: '100px 0', backgroundColor: '#f2f2f2', borderRadius: '20px', padding: '14px 60px' }}>
        <p>async step running...</p>
        <p>{recipe.steps[currentAsyncStep].instruction}</p>
        <p>⏰ {recipe.steps[currentAsyncStep].duration} minutes</p>
        <Button onClick={resetTimer}>Done Step</Button>
      </div>
      : ''}
    </div>
  );
}

export default CookingModePage;
