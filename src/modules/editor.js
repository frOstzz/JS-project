import {
  createButtons,
  publicateButton,
  createContentEditableDiv,
  createHashForDiv,
  createDivs,
} from '../modules/createElements.js';

export const createEditor = () => {
  const mainDiv = createDivs(createHashForDiv('', 'container-editor'));
  const editor = createContentEditableDiv(createHashForDiv('editor', 'editor'));

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(editor);
};
