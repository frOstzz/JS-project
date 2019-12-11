export const titleValid = () => {
  const articleTitle = document.getElementById('title');
  const pubBtn = document.getElementById('pub');

  if (articleTitle.value === '') {
    articleTitle.classList.remove('process');
    articleTitle.classList.remove('valid');
    articleTitle.classList.add('invalid');
    pubBtn.disabled = true;
  } else if (articleTitle.value.length > 50) {
    articleTitle.classList.remove('process');
    articleTitle.classList.remove('valid');
    articleTitle.classList.add('invalid');
    pubBtn.disabled = true;
  } else if (articleTitle.value.length < 10) {
    articleTitle.classList.remove('process');
    articleTitle.classList.remove('valid');
    articleTitle.classList.add('invalid');
    pubBtn.disabled = true;
  } else {
    articleTitle.classList.remove('process');
    articleTitle.classList.add('valid');
    pubBtn.disabled = false;
  }
};

export const inProcess = () => {
  const articleTitle = document.getElementById('title');

  articleTitle.classList.add('process');
};
