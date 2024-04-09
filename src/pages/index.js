import { shortener } from "../utils/api.js";
import { focusElement } from "../utils/helpers.js";

export default function main() {
  document.getElementById("customPath_field").addEventListener("click", (e) => {
    focusElement("custom_path");
  });

  const customPathInput = document.getElementById("custom_path");
  const longUrlInput = document.getElementById("longUrl_input");

  const shorteningForm = document.getElementById("shortening_form");

  shorteningForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { long_url, custom_path } = Object.fromEntries(formData);

    const payload = {
      mainUrl: long_url,
      preferredPath: custom_path,
    };

    const myHeaders = new Headers({
      append: { "Content-Type": "application/json" },
    });
    // myHeaders.append("Content-Type", "application/json");

    const response = await shortener(payload);
    console.log(response);
  });
}
