export function handleBackButtonClick(step, handleStepChange) {
  if (step >= 2 && step !== 3) {
    handleStepChange(1);
  }
}
