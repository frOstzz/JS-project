import { stateIds, delButtonsIds } from './storage.js';

export const deleteState = () => {
  const allDeleteButtons = document.getElementsByClassName('delete-button');
  const stateId = stateIds.findIndex((el) => el === event.target.id);

  const delState = () => {
    const stateId = stateIds.findIndex((el) => el === event.target.id);
    stateIds.splice(stateId, 1);
    //delButtonsIds.splice(stateId, 1);
    const stateList = document.getElementsByClassName('state-list');
    let state = document.getElementById('state' + event.target.id);
    stateList.remove(state);
  };

  for (let i = 0; i < allDeleteButtons.length; i += 1) {
    allDeleteButtons[i].addEventListener('click', delState);
  }
};
