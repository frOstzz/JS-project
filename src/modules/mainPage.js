import {
  createButtons,
  publicateButton,
  createHashForDiv,
  createDivs,
} from '../modules/createElements.js';

import { createEditor } from '../modules/editor.js';
//import { stateCounter } from '../modules/storage.js';

export const createMainPage = () => {
  const mainDiv = createDivs(createHashForDiv('container', 'container'));
  const information = createDivs(createHashForDiv('', 'information'));
  const stateList = createDivs(createHashForDiv('state-list', 'state-list'));
  const personInfo = createDivs(createHashForDiv('info', 'person-info'));
  const combineDiv = createDivs(createHashForDiv('combine-div', 'combine-div'));

  //times code==============
  const username = 'Admin';

  let counter = stateCounter();

  personInfo.innerHTML = `<span class="info-text">Your name: <strong>${username}</strong></span>`;

  personInfo.innerHTML = `<span class="info-text">Your states: <strong>${counter}</strong></span>`; //bug

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
    combineDiv.classList.remove('combine-div');
    combineDiv.classList.add('hide');
  });
  addArticle.addEventListener('click', createEditor);
};

export const stateCounter = () => {
  const stateList = document.getElementsByClassName('custom-article');
  let counter = stateList.length;
  return counter;
};
