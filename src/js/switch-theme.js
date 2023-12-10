const switchTheme = () => {
  const rootElem = document.documentElement;
  const dataTheme = rootElem.dataset.theme;
  let newTheme;

  newTheme = dataTheme === 'light' ? 'dark' : 'light';
  rootElem.dataset.theme = newTheme;

  // set local storage
  localStorage.setItem('theme', newTheme);
};

document.querySelector('.m-theme-toggle').addEventListener('click', switchTheme);
