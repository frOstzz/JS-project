import {
  createButtons,
  publicateButton,
  createContentEditableDiv,
  createHashForDiv,
  createDivs,
} from '../scripts/modules/createElements.js';

const main = () => {
  //divs
  const mainDiv = createDivs(createHashForDiv('container', 'container'));
  const editor = createContentEditableDiv(createHashForDiv('editor', 'editor'));
  const information = createDivs(createHashForDiv('', 'information'));
  const stateList = createDivs(createHashForDiv('state-list', 'state-list'));
  const personInfo = createDivs(createHashForDiv('', 'person-info'));

  //times code==============
  const username = 'Admin';
  const states = '3';

  personInfo.innerHTML = `<span class="info-text">Your name: <strong>${username}</strong></span>
                          <span class="info-text">Your states: <strong>${states}</strong></span>`;
  //============================

  //buttons
  const addArticle = createButtons(publicateButton);

  document.body.appendChild(mainDiv);
  //mainDiv.appendChild(editor); Contenteditable div

  mainDiv.appendChild(stateList);

  mainDiv.appendChild(information);
  information.appendChild(personInfo);
  personInfo.appendChild(addArticle);
};

main();
