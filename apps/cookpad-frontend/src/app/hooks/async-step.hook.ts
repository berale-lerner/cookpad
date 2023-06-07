import { Step } from '@cookpad/cookpad-types';
import { useState, useEffect } from 'react';

export function useAsyncStep(steps: Step[], currentIndex: number) {
  const [asyncStepIndex, setAsyncStepIndex] = useState<number | null>(null);
  let timeoutRef: any;

  const resetTimer = () => {
    clearTimeout(timeoutRef);
    setAsyncStepIndex(null)
  }

  useEffect(() => {
    if (asyncStepIndex !== null) {
      return;
    }

    const currentStep = steps[currentIndex];
    let currentAsyncStep;

    if (currentStep.duration !== undefined) {
      currentAsyncStep = currentIndex;

      timeoutRef = setTimeout(() => {
        setAsyncStepIndex(null);
      }, Number(currentStep.duration) * 1000 * 60);
    } else {
      currentAsyncStep = null;
    }

    setAsyncStepIndex(currentAsyncStep);

    
  }, [currentIndex]);
  
  return { currentAsyncStep: asyncStepIndex, resetTimer };
}