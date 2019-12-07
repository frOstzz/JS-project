import {
  createContentEditableDiv,
  createHashForDiv,
  createDivs,
  createEditButton,
  createHashEditButton,
  createHeadingList,
  createButtons,
  publicateButton,
  createInputs,
  articleTitleInputHash,
} from '../modules/createElements.js';

import { arrForState } from './storage.js';

import { stateCounter } from './mainPage.js';

export const createEditor = () => {
  const mainContainer = document.getElementById('container');
  const mainDiv = createDivs(createHashForDiv('', 'container-editor'));
  const editorButtons = createDivs(createHashForDiv('', 'edit-buttons'));
  const editor = createContentEditableDiv(createHashForDiv('editor', 'editor'));

  const buttons = [
    { name: 'bold', icon: 'fa fa-bold' },
    { name: 'italic', icon: 'fa fa-italic' },
    { name: 'underline', icon: 'fa fa-underline' },
    { name: 'strikeThrough', icon: 'fa fa-strikethrough' },
    { name: 'justifyLeft', icon: 'fa fa-align-left' },
    { name: 'justifyCenter', icon: 'fa fa-align-center' },
    { name: 'justifyRight', icon: 'fa fa-align-right' },
    { name: 'justifyFull', icon: 'fa fa-align-justify' },
    { name: 'cut', icon: 'fa fa-cut' },
    { name: 'copy', icon: 'fa fa-copy' },
    { name: 'indent', icon: 'fa fa-indent' },
    { name: 'outdent', icon: 'fa fa-dedent' },
    { name: 'subscript', icon: 'fa fa-subscript' },
    { name: 'superscript', icon: 'fa fa-superscript' },
    { name: 'undo', icon: 'fa fa-undo' },
    { name: 'redo', icon: 'fa fa-repeat' },
    { name: 'insertUnorderedList', icon: 'fa fa-list-ul' },
    { name: 'insertOrderedList', icon: 'fa fa-list-ol' },
    { name: 'insertParagraph', icon: 'fa fa-paragraph' },
  ];

  buttons.forEach((button) => {
    editorButtons.appendChild(createEditButton(createHashEditButton(button.name, button.icon)));
  });

  const title = createInputs(articleTitleInputHash);

  const pubBtn = createButtons(publicateButton);

  mainContainer.appendChild(mainDiv);
  mainDiv.appendChild(editorButtons);

  createHeadingList(editorButtons);

  mainDiv.appendChild(title);
  mainDiv.appendChild(editor);

  mainDiv.appendChild(pubBtn);

  workEditor();

  const stateEditorList = document.getElementsByClassName('state-editor');

  const storage = () => {
    let hashForState = {};

    hashForState.title = title.value;
    hashForState.state = editor.innerHTML;
    arrForState.push(hashForState);

    return hashForState;
  };

  const hideEditor = () => {
    mainDiv.classList.remove('container-editor');
    mainDiv.classList.add('hide', 'state-editor');

    const combineDiv = document.getElementById('combine-div');

    combineDiv.classList.remove('hide');
    combineDiv.classList.add('combine-div');

    for (let i = 0; i < stateEditorList.length; i += 1) {
      mainDiv.id = 'edit-state' + stateEditorList.length;
      publicateButton.id = 'publicate' + stateEditorList.length;
    }
  };

  const addState = () => {
    const stateList = document.getElementById('state-list');
    const state = document.createElement('div');
    state.className = 'custom-article';
    state.id = 'state' + stateEditorList.length;
    stateList.appendChild(state);

    storage();

    for (let i = 0; i < arrForState.length; i += 1) {
      state.innerHTML = `<span class="state-title">${arrForState[i].title}</span>`;
    }
  };

  const allBtnPublicate = document.getElementsByClassName('my-button');

  for (let i = 1; i < allBtnPublicate.length; i += 1) {
    allBtnPublicate[i].addEventListener('click', hideEditor);
    allBtnPublicate[i].addEventListener('click', addState);
    allBtnPublicate[i].addEventListener('click', stateCounter);
  }
};

const workEditor = () => {
  const allEditorButtons = document.getElementsByClassName('editor-buttons');
  const heading = document.getElementById('heading');

  const execCommandWithArg = () => {
    document.execCommand('formatBlock', false, heading.value);
  };

  heading.addEventListener('change', execCommandWithArg);

  const setAttribute = (element) => {
    document.execCommand(element.dataset.attribute, false);
  };

  for (let i = 0; i < allEditorButtons.length; i += 1) {
    allEditorButtons[i].addEventListener('click', () => {
      setAttribute(allEditorButtons[i]);
    });
  }
};
