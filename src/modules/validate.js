export const titleValid = () => {
  const articleTitle = document.getElementsByClassName('article-title');
  const pubBtn = document.getElementById('pub');

  for (let i = 0; i < articleTitle.length; i += 1) {
    if (articleTitle[i].value === '') {
      articleTitle[i].classList.remove('process');
      articleTitle[i].classList.remove('valid');
      articleTitle[i].classList.add('invalid');
      pubBtn.disabled = true;
    } else if (articleTitle[i].value.length > 50) {
      articleTitle[i].classList.remove('process');
      articleTitle[i].classList.remove('valid');
      articleTitle[i].classList.add('invalid');
      pubBtn.disabled = true;
    } else if (articleTitle[i].value.length < 10) {
      articleTitle[i].classList.remove('process');
      articleTitle[i].classList.remove('valid');
      articleTitle[i].classList.add('invalid');
      pubBtn.disabled = true;
    } else {
      articleTitle[i].classList.remove('process');
      articleTitle[i].classList.remove('invalid');
      articleTitle[i].classList.add('valid');
      pubBtn.disabled = false;
    }
  }
};

export const inProcess = () => {
  const articleTitle = document.getElementsByClassName('article-title');

  for (let i = 0; i < articleTitle.length; i += 1) {
    articleTitle[i].classList.add('process');
  }
};
