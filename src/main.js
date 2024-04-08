import "./utils/router.js";

import { shortener } from "./utils/api.js";
import { focusElement } from "./utils/helpers.js";

const customPathField = document.getElementById("customPath_field");
const customPathInput = document.getElementById("custom_path");
const longUrlInput = document.getElementById("longUrl_input");
const loadingIndicator = document.getElementById("loading_indicator");

const shorteningForm = document.getElementById("shortening_form");

customPathField.addEventListener("click", () => {
  focusElement("custom_path");
  console.log("clicked");
});

shorteningForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  loadingIndicator.classList.remove("opacity-0");
  loadingIndicator.classList.add("opacity-100");

  const formData = new FormData(event.target);
  const { long_url, custom_path } = Object.fromEntries(formData);

  const payload = {
    mainUrl: long_url,
    prefferedPath: custom_path,
  };

  const response = await shortener(payload);
  console.log(response);

  loadingIndicator.classList.add("opacity-0");
  loadingIndicator.classList.remove("opacity-100");
});
