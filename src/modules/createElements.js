//functions===========================
export const createButtons = (hash) => {
  const element = document.createElement(hash.elem);
  element.type = hash.type;
  element.id = hash.id;
  element.className = hash.className;
  element.value = hash.value;
  return element;
};

export const createEditButton = (hash) => {
  const element = document.createElement('button');
  element.setAttribute(hash.attrName, hash.dataAttribute);
  element.className = hash.className;
  return element;
};

export const createContentEditableDiv = (hash) => {
  const element = document.createElement(hash.elem);
  element.id = hash.id;
  element.className = hash.className;
  element.contentEditable = 'true';
  return element;
};

export const createDivs = (hash) => {
  const div = document.createElement(hash.elem);
  div.id = hash.id;
  div.className = hash.className;
  return div;
};

export const createHeadingList = (place) => {
  const select = document.createElement('select');
  select.id = 'heading';
  place.appendChild(select);

  for (let i = 2; i <= 6; i += 1) {
    const option = new Option(`H${i}`, `H${i}`);
    select.appendChild(option);
  }
  return select;
};

export const createInputs = (hash) => {
  const input = document.createElement('input');
  input.id = hash.id;
  input.placeholder = hash.placeholder;
  input.className = hash.className;
  return input;
};

//Hash elements =======================
export const publicateButton = {
  elem: 'input',
  type: 'button',
  id: 'publicate',
  className: 'my-button',
  value: 'Publicate',
};

export const publicateEditorButton = {
  elem: 'input',
  type: 'button',
  id: 'pub',
  className: 'my-button',
  value: 'Publicate',
};

export const backButton = {
  elem: 'input',
  type: 'button',
  id: 'back-btn',
  className: 'my-button',
  value: 'Back',
};

export const delBtn = {
  elem: 'button',
  className: 'delete-button fa fa-trash',
};

export const createHashForDiv = (id, className) => {
  const divHash = {
    elem: 'div',
    id: id,
    className: className,
  };
  return divHash;
};

export const createHashEditButton = (attr, className) => {
  const buttonHash = {
    attrName: 'data-attribute',
    dataAttribute: attr,
    className: `editor-buttons ${className}`,
  };
  return buttonHash;
};

export const articleTitleInputHash = {
  id: 'title',
  placeholder: 'Enter your title',
  className: 'article-title',
};
