//functions===========================
export const createButtons = (hash) => {
  const element = document.createElement(hash.elem);
  element.type = hash.type;
  element.id = hash.id;
  element.className = hash.className;
  element.value = hash.value;
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

//Hash elements =======================
export const publicateButton = {
  elem: 'input',
  type: 'button',
  id: 'publicate',
  className: 'my-button',
  value: 'click me',
};

export const createHashForDiv = (id, className) => {
  const divHash = {
    elem: 'div',
    id: id,
    className: className,
  };
  return divHash;
};
