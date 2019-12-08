import {
  createButtons,
  publicateButton,
  createHashForDiv,
  createDivs,
} from '../modules/createElements.js';

import { createEditor } from '../modules/editor.js';
import { viewState } from './viewStates.js';
import { delButtonsIds } from './storage.js';
//import { deleteState } from './deleteState.js';

export const createMainPage = () => {
  const mainDiv = createDivs(createHashForDiv('container', 'container'));
  const information = createDivs(createHashForDiv('', 'information'));
  const stateList = createDivs(createHashForDiv('state-list', 'state-list'));
  const personInfo = createDivs(createHashForDiv('info', 'person-info'));
  const combineDiv = createDivs(createHashForDiv('combine-div', 'combine-div'));

  const username = 'Admin';

  let counter = 0;
  personInfo.innerHTML = `<span class="info-text">Your name: <strong>${username}</strong></span>
                          <span class="info-text">Your states: <strong>${counter}</strong></span>`;

  const addArticle = createButtons(publicateButton);

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(combineDiv);

  combineDiv.appendChild(stateList);

  combineDiv.appendChild(information);
  information.appendChild(personInfo);
  personInfo.appendChild(addArticle);

  const stateCounter = () => {
    counter += 1;
    personInfo.innerHTML = `<span class="info-text">Your name: <strong>${username}</strong></span>
                            <span class="info-text">Your states: <strong>${counter}</strong></span>`;
    personInfo.appendChild(addArticle);
  };

  addArticle.addEventListener('click', () => {
    combineDiv.classList.remove('combine-div');
    combineDiv.classList.add('hide');
  });
  addArticle.addEventListener('click', createEditor);
  addArticle.addEventListener('click', stateCounter);

  viewState();

  // deleteState();
};
