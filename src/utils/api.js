const BASE_URL = "https://urishortener.onrender.com/Uri/create-url";

export async function shortener(payload) {
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    mode: "no-cors",
  });
}
