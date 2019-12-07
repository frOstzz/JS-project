import { arrForState } from './storage.js';

export const viewState = () => {
  const mainDiv = document.getElementById('container');
  const combDiv = document.getElementById('combine-div');

  combDiv.onclick = (event) => {
    let target = event.target;
    if (target.className === 'custom-article') {
      combDiv.classList.remove('combine-div');
      combDiv.classList.add('hide');
      const divchik = document.createElement('div');
      mainDiv.appendChild(divchik);

      for (let i = 0; i < arrForState.length; i += 1) {
        divchik.innerHTML = arrForState[i].state;
      }
    }
  };
};
