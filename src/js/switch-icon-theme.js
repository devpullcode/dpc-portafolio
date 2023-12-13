const switchIconTheme = () => {
  const rootElem = document.documentElement;
  const dataTheme = rootElem.dataset.theme;
  const icons = document.querySelectorAll('.m-contact__item-icon--img');
  console.log(icons);
  console.log(dataTheme);

  icons.forEach(icon => {
    const iconURL = icon.getAttribute('src');
    const iconURLSplit = iconURL.split('/');
    const lastValueUrl = iconURLSplit[iconURLSplit.length - 1];
    const newLastValue = lastValueUrl.split('-');

    if (dataTheme === 'light') {
      newLastValue[newLastValue.length - 1] = 'light.svg';
    } else {
      newLastValue[newLastValue.length - 1] = 'dark.svg';
    }
    iconURLSplit[iconURLSplit.length - 1] = newLastValue.join('-');
    icon.setAttribute('src', iconURLSplit.join('/'));
  });
};
