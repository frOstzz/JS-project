import { arrForState } from './storage.js';
import { createDivs, createHashForDiv, createButtons, backButton } from './createElements.js';

export const viewState = () => {
  const mainDiv = document.getElementById('container');
  const combDiv = document.getElementById('combine-div');
  const backBtn = createButtons(backButton);

  combDiv.onclick = (event) => {
    let target = event.target;
    if (target.className === 'custom-article') {
      combDiv.classList.remove('combine-div');
      combDiv.classList.add('hide');

      for (let i = 0; i < arrForState.length; i += 1) {
        const viewStates = createDivs(createHashForDiv('view-state' + i, 'view'));

        const backToMainPage = () => {
          viewStates.remove();
          combDiv.classList.remove('hide');
          combDiv.classList.add('combine-div');
        };

        mainDiv.appendChild(viewStates);
        viewStates.innerHTML = arrForState[i].state;
        viewStates.appendChild(backBtn);

        backBtn.addEventListener('click', backToMainPage);
      }
    }
  };
};
