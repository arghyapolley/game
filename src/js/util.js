import { BASE_RATE } from './enums';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const updateSliderHeight = () => {
  const sliderContainer = document.querySelector('.sliderContainer');
  const slider = document.querySelector('.slider');
  const newHeight = sliderContainer.getBoundingClientRect().height;
  slider.setAttribute('style', `
    width: ${newHeight}px;
    transform-origin: ${newHeight / 2}px ${newHeight / 2}px
  `);
};


const updateScoreHTML = (newScore) => document.querySelector('#currentScore').innerHTML = newScore;
const updateStartButtonHTML = (isPlaying) => document.querySelector('#startButton').innerHTML = isPlaying ? 'Pause' : 'Start';
const updateSliderHTML = (newValue) => document.querySelector('#currentSpeed').innerHTML = `${newValue} px/s`;
const updateScore = (state, amtToAdd) => {
  state.score += +amtToAdd;
 document.querySelector('#currentScore').innerHTML = state.score;
}


const pauseCages = (isPlaying = false) => {
  const cages = document.querySelectorAll('.imageWrapper');
  cages.forEach((cage) => {
    cage.style.WebkitAnimationPlayState = isPlaying ? 'running' : 'paused';
    if (isPlaying) {
      cage.disabled = false;
    } else {
      cage.disabled = true;
    }
  })
}
const removeCage = (imageWrapper) => {
  imageWrapper.removeEventListener("animationend", removeCage);
  imageWrapper.parentNode.removeChild(imageWrapper);
}
const determinePosition = (imageWidth) => {
  const maxWidth = document.querySelector('.gameBoard').clientWidth;
  const leftPosition = randomNumber(0, maxWidth - imageWidth);
  return leftPosition;
}
const determineAnimationTime = (desiredFallRate) => {
  console.log('desiredFallRate: ', desiredFallRate, BASE_RATE);
  const windowHeight = window.innerHeight;
  return windowHeight / (desiredFallRate * BASE_RATE);
}
const addPointValueToScore = (state, imageWrapper) => {
  if (state.isPlaying) {
    updateScore(state, imageWrapper.dataset.pointvalue);
    removeCage(imageWrapper);
  }
}

const resetGameBoard = (gameState, myInterval) => {
  gameState.score = 0;
  gameState.isPlaying = false;
  gameState.currentSpeed = 60;
  updateScoreHTML(gameState.score);
  updateSliderHTML(gameState.currentSpeed);
  updateStartButtonHTML(false);
  document.querySelector('#speedControl').value = 60;
  clearInterval(myInterval);

 
  const cages = document.querySelectorAll('.imageWrapper');
  cages.forEach((cage) => {
    removeCage(cage);
  })
}

export {
  addPointValueToScore,
  determineAnimationTime,
  determinePosition,
  pauseCages,
  randomNumber,
  removeCage,
  resetGameBoard,
  updateScoreHTML,
  updateScore,
  updateSliderHeight,
  updateSliderHTML,
  updateStartButtonHTML,
};