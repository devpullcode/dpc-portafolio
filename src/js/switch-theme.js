(() => {
  const iconTheme = document.querySelector('.m-theme-toggle__icon');
  const rootElem = document.documentElement;
  const dataTheme = rootElem.dataset.theme;

  if (dataTheme === 'dark') {
    iconTheme.classList = 'fa-solid fa-sun fa-2xl m-theme-toggle__icon';
  } else {
    iconTheme.classList = 'fa-solid fa-moon fa-2xl m-theme-toggle__icon';
  }

  // switchThemeIcons
  (() => {
    const computerLanguagesIcon1 = document.querySelector('.m-computer-languages__icon-body:nth-child(4)');
    const computerLanguagesIcon2 = document.querySelector('.m-computer-languages__icon-body:last-child');
    const frontendMentorIconH = document.querySelector('.m-frontend-mentor__icon-header');

    if (dataTheme === 'dark') {
      computerLanguagesIcon1.classList.toggle('icon-light-theme');
      computerLanguagesIcon2.classList.toggle('icon-light-theme');
      frontendMentorIconH.classList.toggle('icon-dark-theme');
    }
  })();

  const switchTheme = () => {
    const computerLanguagesIcon1 = document.querySelector('.m-computer-languages__icon-body:nth-child(4)');
    const computerLanguagesIcon2 = document.querySelector('.m-computer-languages__icon-body:last-child');
    const frontendMentorIconH = document.querySelector('.m-frontend-mentor__icon-header');

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

    computerLanguagesIcon1.classList.toggle('icon-light-theme');
    computerLanguagesIcon2.classList.toggle('icon-light-theme');
    frontendMentorIconH.classList.toggle('icon-dark-theme');

    // set local storage
    localStorage.setItem('theme', newTheme);
  };

  document.querySelector('.m-theme-toggle').addEventListener('click', switchTheme);
})();
