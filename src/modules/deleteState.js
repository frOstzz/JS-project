import { delButtonsIds, counter } from './storage.js';

const deleteState = () => {
  let target = event.target;
  const delBtnIndex = delButtonsIds.findIndex((el) => el === target.id);

  let state = document.getElementById('state' + delBtnIndex);

  document.getElementById('state-list').removeChild(state);
};

export const deleteArticle = (elem, username, btn) => {
  let div = document.querySelector('#container');
  const personInfo = document.getElementById('info');

  div.addEventListener('click', (event) => {
    if (event.target.className === 'delete-button fa fa-trash') {
      deleteState();
      counter.pop(1);

      elem.innerHTML = `<span class="info-text">Your name: <strong>${username}</strong></span>
                        <span class="info-text">Your states: <strong>${counter.length}</strong></span>`;
      elem.appendChild(btn);
    }
  });
};
