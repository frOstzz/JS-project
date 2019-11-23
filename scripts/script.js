import {
  createButtons,
  publicateButton,
  createContentEditableDiv,
  createHashForDiv,
  createDivs,
} from '../scripts/modules/createElements.js';

const main = () => {
  const mainDiv = createDivs(createHashForDiv('container', 'container'));
  const div = createContentEditableDiv(createHashForDiv('test', 'test'));
  const btn = createButtons(publicateButton);
  div.innerHTML = '<strong>Test</strong>';

  document.body.appendChild(mainDiv);
  mainDiv.appendChild(div);
  mainDiv.appendChild(btn);

  let test = document.querySelectorAll('div');
  btn.addEventListener('click', () => {
    for (let i = 0; i < test.length; i += 1) {
      const test1 = createDivs(createHashForDiv('test' + i, 'test'));
      test1.innerHTML = div.textContent;
      document.body.appendChild(test1);
    }
  });
};

main();
