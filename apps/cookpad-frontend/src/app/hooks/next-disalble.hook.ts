import { Step } from '@cookpad/cookpad-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNextButtonDisable(steps: Step[], currentIndex: number, currentAsyncStep: number | null) {
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentIndex === steps.length - 1) {
        setDisable(true);
        return;
    }

    const nexStep = steps[currentIndex + 1];

    if (nexStep.depend === undefined) {
        setDisable(false);
        return;
    } 

    if (nexStep.depend === currentAsyncStep) {
        setDisable(true);
        return;
    }

    setDisable(false);
  }, [currentIndex, currentAsyncStep]);

  return disable;
}