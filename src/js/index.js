// Util
import { updateSliderHTML, updateSliderHeight, resetGameBoard, updateStartButtonHTML, pauseCages, updateScoreHTML } from './util.js';

// Components
import { textFlash } from './textFlash.js';
import { addCage } from './cage.js';

const slider = document.querySelector('#speedControl');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const instructionsButton = document.querySelector('#instructions');
const closeModalButton = document.querySelector('.close');

// Global variables
let gameState = {
  currentSpeed: slider.value,
  score: 0,
  isPlaying: false
};
let myInterval;

window.addEventListener('resize', () => {
  updateSliderHeight();
});

updateSliderHTML(gameState.currentSpeed);
updateScoreHTML(0);
updateSliderHeight();

// Update currentSpeed when slider is adjusted
slider.addEventListener('input', (event) => {
  const { value } = event.target;
  gameState.currentSpeed = value;
  updateSliderHTML(value);
});

// Capture button press
startButton.addEventListener('click', () => {
  const { isPlaying } = gameState;
  gameState.isPlaying = !isPlaying;
  updateStartButtonHTML(gameState.isPlaying);
  textFlash(gameState.isPlaying ? 'play' : 'pause');

  // Add a cage to a random spot every second
  if (gameState.isPlaying) {
    myInterval = setInterval(() => addCage(gameState), 1000);
  } else {
    clearInterval(myInterval);
  }

  // Grab all cages from the dom and pause animation
  pauseCages(gameState.isPlaying);
});

// Reset game
resetButton.addEventListener('click', () => {
  textFlash('restart');
  resetGameBoard(gameState, myInterval);
});

// Open modal
instructionsButton.addEventListener('click', () => {
  const modal = document.querySelector('.modalOverlay');
  modal.classList.add('active');
  pauseCages();
  updateStartButtonHTML(false);
  gameState.isPlaying = false;
  clearInterval(myInterval);
});

// Close modal
closeModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modalOverlay');
  modal.classList.remove('active');
});