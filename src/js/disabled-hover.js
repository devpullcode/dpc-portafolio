const switchDisableBtn = (status, classElements) => {
  classElements.forEach(classElement => {
    const elements = document.querySelectorAll(`.${classElement}`);
    console.log(elements);
    if (status) elements.forEach(element => element.classList.add('no-hover'));
    if (!status) elements.forEach(element => element.classList.remove('no-hover'));
  });
};

window.addEventListener('load', () => {
  const classNamesDisableBTN = ['m-contact__item-value']; // indicate the classes of the elements to deactivate the hover.
  if (navigator.maxTouchPoints > 0) switchDisableBtn(true, classNamesDisableBTN);
});
