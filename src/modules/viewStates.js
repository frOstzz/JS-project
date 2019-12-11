import { arrForState, stateIds } from './storage.js';
import { createDivs, createHashForDiv, createButtons, backButton } from './createElements.js';

export const viewState = () => {
  const mainDiv = document.getElementById('container');
  const combDiv = document.getElementById('combine-div');
  const backBtn = createButtons(backButton);

  combDiv.onclick = (event) => {
    let target = event.target;

    if (target.className === 'custom-article' || target.tagName === 'SPAN') {
      combDiv.classList.remove('combine-div');
      combDiv.classList.add('hide');

      document.title = `View article`;

      for (let i = 0; i < arrForState.length; i += 1) {
        const viewStates = createDivs(createHashForDiv('view-state' + i, 'view'));

        const backToMainPage = () => {
          viewStates.remove();
          combDiv.classList.remove('hide');
          combDiv.classList.add('combine-div');
        };

        mainDiv.appendChild(viewStates);

        if (stateIds[i] === event.target.id) {
          viewStates.innerHTML = `<h1 class="text-center">${arrForState[i].title}</h1>
                                  ${arrForState[i].state}`;
        }

        viewStates.appendChild(backBtn);

        backBtn.addEventListener('click', backToMainPage);
        backBtn.addEventListener('click', () => {
          document.title = 'Your articles';
        });
      }
    }
  };
};
