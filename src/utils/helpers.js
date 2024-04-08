export function focusElement(id) {
  const element = document.querySelector(`#${id}`);
  if (element) {
    element.focus();
  }
}
