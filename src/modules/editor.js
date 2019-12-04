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

import { createMainPage } from './mainPage.js';

export const createEditor = () => {
  let test = 1;

  const mainContainer = document.getElementById('container');
  const mainDiv = createDivs(createHashForDiv('', 'container-editor'));
  const editorButtons = createDivs(createHashForDiv('', 'edit-buttons'));
  const editor = createContentEditableDiv(createHashForDiv('editor', 'editor'));

  //create editor buttons
  const bold = createEditButton(createHashEditButton('bold', 'fa fa-bold'));
  const italic = createEditButton(createHashEditButton('italic', 'fa fa-italic'));
  const underline = createEditButton(createHashEditButton('underline', 'fa fa-underline'));
  const strikeThrough = createEditButton(
    createHashEditButton('strikeThrough', 'fa fa-strikethrough'),
  );
  const alignLeft = createEditButton(createHashEditButton('justifyLeft', 'fa fa-align-left'));
  const alignCenter = createEditButton(createHashEditButton('justifyCenter', 'fa fa-align-center'));
  const alignRight = createEditButton(createHashEditButton('justifyRight', 'fa fa-align-right'));
  const alignJustify = createEditButton(createHashEditButton('justifyFull', 'fa fa-align-justify'));
  const cut = createEditButton(createHashEditButton('cut', 'fa fa-cut'));
  const copy = createEditButton(createHashEditButton('copy', 'fa fa-copy'));
  const indent = createEditButton(createHashEditButton('indent', 'fa fa-indent'));
  const outdent = createEditButton(createHashEditButton('outdent', 'fa fa-dedent'));
  const subscript = createEditButton(createHashEditButton('subscript', 'fa fa-subscript'));
  const superscript = createEditButton(createHashEditButton('superscript', 'fa fa-superscript'));
  const undo = createEditButton(createHashEditButton('undo', 'fa fa-undo'));
  const repeat = createEditButton(createHashEditButton('redo', 'fa fa-repeat'));
  const listUl = createEditButton(createHashEditButton('insertUnorderedList', 'fa fa-list-ul'));
  const listOl = createEditButton(createHashEditButton('insertOrderedList', 'fa fa-list-ol'));
  const paragraph = createEditButton(createHashEditButton('insertParagraph', 'fa fa-paragraph'));

  const title = createInputs(articleTitleInputHash);

  const pubBtn = createButtons(publicateButton);

  mainContainer.appendChild(mainDiv);
  mainDiv.appendChild(editorButtons);

  //append edit buttons
  editorButtons.appendChild(bold);
  editorButtons.appendChild(italic);
  editorButtons.appendChild(underline);
  editorButtons.appendChild(strikeThrough);
  editorButtons.appendChild(alignLeft);
  editorButtons.appendChild(alignCenter);
  editorButtons.appendChild(alignRight);
  editorButtons.appendChild(alignJustify);
  editorButtons.appendChild(cut);
  editorButtons.appendChild(copy);
  editorButtons.appendChild(indent);
  editorButtons.appendChild(outdent);
  editorButtons.appendChild(subscript);
  editorButtons.appendChild(superscript);
  editorButtons.appendChild(undo);
  editorButtons.appendChild(repeat);
  editorButtons.appendChild(listUl);
  editorButtons.appendChild(listOl);
  editorButtons.appendChild(paragraph);
  createHeadingList(editorButtons);

  mainDiv.appendChild(editor);
  editor.appendChild(title);

  mainDiv.appendChild(pubBtn);

  workEditor();

  const stateEditorList = document.getElementsByClassName('state-editor');
  const allTitles = document.getElementsByClassName('article-title');

  let arrForState = [];
  let hashForState = {};

  const storage = () => {
    const editor = document.getElementById('editor');

    hashForState.title = title.value;
    hashForState.state = editor.outerHTML;
    arrForState.push(hashForState);

    // for (let i = 0; i < arrForState.length; i += 1) {
    //   hashForState.title = title[i].value;
    //   hashForState.state = editor.outerHTML;
    //   arrForState.push(hashForState);
    // }

    // for (let i = 0; i < arrForState.length; i += 1) {
    //   arrForState.push(hashForState);
    // }

    //console.log(document.getElementsByClassName('editor'));
    console.log(arrForState);
  };

  const hideEditor = () => {
    mainDiv.classList.remove('container-editor');
    mainDiv.classList.add('hide', 'state-editor');

    for (let i = 0; i < stateEditorList.length; i += 1) {
      storage();
    }

    //storage();

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
    state.innerHTML = hashForState.title;
  };

  const allBtnPublicate = document.getElementsByClassName('my-button');

  for (let i = 1; i < allBtnPublicate.length; i += 1) {
    allBtnPublicate[i].addEventListener('click', hideEditor);
    allBtnPublicate[i].addEventListener('click', addState);
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
