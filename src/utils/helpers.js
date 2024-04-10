export function focusElement(id) {
  const element = document.querySelector(`#${id}`);
  if (element) {
    element.focus();
  }
}

export function createLinkComponent(url) {
  const shortenerForm = document.querySelector("#shortening_form");
  const template = document.getElementById("response_container");
  console.log(template, shortenerForm);

  const tobereplaced = document.getElementById("relace");

  const linkAnchor = template
    .querySelector("#response_container a")
    .replaceChild();
  console.log(linkAnchor);

  // linkAnchor.href = url;
  // linkAnchor.innerText = url;

  const newLinkComponent = template.content.cloneNode(true);
  shortenerForm.replaceChild(newLinkComponent, tobereplaced);
}
