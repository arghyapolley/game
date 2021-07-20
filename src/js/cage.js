import { randomNumber, determineAnimationTime, determinePosition, removeCage, addPointValueToScore } from './util.js';
import { CAGES, BASE_SIZE } from './enums';

export const addCage = (state) => {
  const randNum = randomNumber(1, 11);
  const randomCage = randomNumber(0, CAGES.length);
  const imageWidth = (randNum * 10) + BASE_SIZE;
  const wrapperData = {
    size: imageWidth,
    pointValue: 11 - randNum,
    position: determinePosition(imageWidth)
  };


  const imageWrapper = document.createElement('button');
  imageWrapper.classList.add('imageWrapper');
  imageWrapper.setAttribute("style", `
    height: ${wrapperData.size}px;
    width: ${wrapperData.size}px;
    animation: slideDown ${determineAnimationTime(state.currentSpeed)}s linear;
    left: ${wrapperData.position}px;
    `);
  imageWrapper.setAttribute("data-pointValue", `${wrapperData.pointValue}`);
  imageWrapper.addEventListener("click", () => addPointValueToScore(state, imageWrapper));
  imageWrapper.addEventListener("animationend", () => removeCage(imageWrapper));

  const innerImage = document.createElement('img');
  innerImage.setAttribute('style', 'width: 100%');
  innerImage.src = CAGES[randomCage].img;
  innerImage.alt = 'Nic Cage';
  imageWrapper.appendChild(innerImage);

  document.querySelector('.gameBoard').appendChild(imageWrapper)
};