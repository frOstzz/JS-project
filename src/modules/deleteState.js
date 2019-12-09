import { stateIds, delButtonsIds } from './storage.js';

export const deleteState = () => {
  const allDeleteButtons = document.getElementsByClassName('delete-button');

  const delState = () => {
    const stateId = stateIds.findIndex((el) => el === event.target.id);
    stateIds.splice(stateId, 1);
    delButtonsIds.splice(stateId, 1);
    console.log(stateIds);
    console.log(delButtonsIds);

    const stateList = document.getElementById('state-list');
    let state = document.getElementById('state' + stateIds.length);
    console.log(stateIds.length);
    console.log(state);
    state.remove();
  };

  for (let i = 0; i < allDeleteButtons.length; i += 1) {
    allDeleteButtons[i].addEventListener('click', delState);
  }
};
