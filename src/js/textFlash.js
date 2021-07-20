export const textFlash = (type) => {
  const target = document.querySelector('.gameBoard');

  const flash = document.createElement('div');
  flash.classList.add('textFlash', `${type}`);
  flash.setAttribute('style', `
    animation: ${type === 'restart' ? 'rotateAndFlash' : 'textFlash' } 750ms ease-in-out;
  `);
  flash.addEventListener("animationend", () => {
    flash.parentNode.removeChild(flash);
  });

  target.appendChild(flash);
}