export const ifEmptyInput = (inputId) => {
  const input = document.getElementById(inputId);

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
    }
  });
};

export const passwordValid = () => {
  const pass = document.getElementById('password');
  const acceptPass = document.getElementById('accept-password');

  if (pass.value !== acceptPass.value) {
    pass.classList.add('invalid');
    acceptPass.classList.add('invalid');
  }
};
