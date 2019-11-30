import {
  createButtons,
  publicateButton,
  createHashForDiv,
  createDivs,
} from '../modules/createElements.js';

import { createEditor } from '../modules/editor.js';

export const createMainPage = () => {
  const mainDiv = createDivs(createHashForDiv('container', 'container'));
  const information = createDivs(createHashForDiv('', 'information'));
  const stateList = createDivs(createHashForDiv('state-list', 'state-list'));
  const personInfo = createDivs(createHashForDiv('', 'person-info'));
  const combineDiv = createDivs(createHashForDiv('', 'combine-div'));

  //times code==============
  const username = 'Admin';
  const states = '3';

  personInfo.innerHTML = `<span class="info-text">Your name: <strong>${username}</strong></span>
                              <span class="info-text">Your states: <strong>${states}</strong></span>`;
  //============================

  //buttons
  const addArticle = createButtons(publicateButton);

  //Append DOM elements
  document.body.appendChild(mainDiv);
  mainDiv.appendChild(combineDiv);

  combineDiv.appendChild(stateList);

  combineDiv.appendChild(information);
  information.appendChild(personInfo);
  personInfo.appendChild(addArticle);

  addArticle.addEventListener('click', () => {
    mainDiv.remove();
  });
  addArticle.addEventListener('click', createEditor);
};
