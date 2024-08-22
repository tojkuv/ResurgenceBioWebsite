window.addClass = (element, className) => {
  if (element) {
    element.classList.add(className);
  }
};

window.removeClass = (element, className) => {
  if (element) {
    element.classList.remove(className);
  }
};
