import { shortenURL } from "../utils/api.js";
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
    const responseError = document.getElementById("response_error");

    responseError.innerText = "";

    const formData = new FormData(event.target);
    const { long_url, custom_path } = Object.fromEntries(formData);

    const payload = {
      mainUrl: long_url,
      preferredPath: custom_path,
    };

    try {
      const response = await shortenURL(payload);

      if (response.ok) {
        console.log(response);
      } else {
        responseError.innerText = `❌ ${
          response.message || "Error shortening link!"
        }`;
      }
    } catch (error) {
      console.error(`ERROR SHORTENING LINK: ${(error, error.message)}`);
      responseError.innerText = `❌ ${
        error.message || "Something went wrong!"
      }`;
    }
  });
}
