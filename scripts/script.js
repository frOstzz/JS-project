import { ifEmptyInput, passwordValid, lengthInputs } from './modules/validateFunc.js';

let registered = false;
let guess = 5;

const createRegisterForm = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const form = document.createElement('form');
  form.classList.add('center-form');

  const registerUsername = document.createElement('input');
  registerUsername.type = 'text';
  registerUsername.id = 'username';
  const labelUsername = document.createElement('label');
  labelUsername.innerText = 'Username';
  labelUsername.setAttribute('for', 'username');
  const containerUsername = document.createElement('div');
  containerUsername.classList.add('field');
  registerUsername.classList.add('my-inputs');

  const registerPassword = document.createElement('input');
  registerPassword.type = 'password';
  registerPassword.id = 'password';
  const labelPassword = document.createElement('label');
  labelPassword.innerText = 'Password';
  labelPassword.setAttribute('for', 'password');
  const containerPassword = document.createElement('div');
  containerPassword.classList.add('field');
  registerPassword.classList.add('my-inputs');

  const acceptPassword = document.createElement('input');
  acceptPassword.type = 'password';
  acceptPassword.id = 'accept-password';
  const labelAcceptPassword = document.createElement('label');
  labelAcceptPassword.innerText = 'Accept your password';
  labelAcceptPassword.setAttribute('for', 'accept-password');
  const containerAcceptPassword = document.createElement('div');
  containerAcceptPassword.classList.add('field');
  acceptPassword.classList.add('my-inputs');

  const registerMail = document.createElement('input');
  registerMail.type = 'email';
  registerMail.id = 'email';
  const labelMail = document.createElement('label');
  labelMail.innerText = 'Mail';
  labelMail.setAttribute('for', 'email');
  const containerMail = document.createElement('div');
  containerMail.classList.add('field');
  registerMail.classList.add('my-inputs');

  const buttonRegister = document.createElement('input');
  buttonRegister.type = 'button';
  buttonRegister.value = 'Register';
  buttonRegister.classList.add('btn-register');

  document.body.appendChild(container);

  container.appendChild(form);

  form.appendChild(containerUsername);
  containerUsername.appendChild(labelUsername);
  containerUsername.appendChild(registerUsername);

  form.appendChild(containerPassword);
  containerPassword.appendChild(labelPassword);
  containerPassword.appendChild(registerPassword);

  form.appendChild(containerAcceptPassword);
  containerAcceptPassword.appendChild(labelAcceptPassword);
  containerAcceptPassword.appendChild(acceptPassword);

  form.appendChild(containerMail);
  containerMail.appendChild(labelMail);
  containerMail.appendChild(registerMail);

  form.appendChild(buttonRegister);

  const isValidDate = () => {
    // ifEmptyInput('username');
    ifEmptyInput('password');
    ifEmptyInput('accept-password');
    ifEmptyInput('email');
    if (passwordValid() === false) {
      guess -= 1;
      alert(`Your guess = ${guess}`);
    }
    if (guess === 0) {
      alert(`Return this page your guess = ${guess}`);
    }
    lengthInputs();
  };

  buttonRegister.addEventListener('click', isValidDate);
};

createRegisterForm();
