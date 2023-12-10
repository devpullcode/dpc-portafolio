const iconTheme = document.querySelector('.m-theme-toggle__icon');
const rootElem = document.documentElement;
const dataTheme = rootElem.dataset.theme;

if (dataTheme === 'dark') {
  iconTheme.classList = 'fa-solid fa-sun fa-2xl m-theme-toggle__icon';
} else {
  iconTheme.classList = 'fa-solid fa-moon fa-2xl m-theme-toggle__icon';
}

const switchTheme = () => {
  const iconTheme = document.querySelector('.m-theme-toggle__icon');
  const rootElem = document.documentElement;
  const dataTheme = rootElem.dataset.theme;
  let newTheme;

  if (dataTheme === 'light') {
    newTheme = 'dark';
    iconTheme.classList = 'fa-solid fa-sun fa-2xl m-theme-toggle__icon';
  } else {
    newTheme = 'light';
    iconTheme.classList = 'fa-solid fa-moon fa-2xl m-theme-toggle__icon';
  }
  rootElem.dataset.theme = newTheme;

  // set local storage
  localStorage.setItem('theme', newTheme);
};

document.querySelector('.m-theme-toggle').addEventListener('click', switchTheme);
