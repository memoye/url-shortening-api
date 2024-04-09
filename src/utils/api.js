const BASE_URL = "https://urishortener.onrender.com/Uri/create-url";

export async function shortenURL(payload) {
  const responseError = document.getElementById("response_error");
  responseError.innerText = "";

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      mode: "cors",
    });
    return response;
  } catch (error) {
    console.error(`ERROR SHORTENING LINK: ${(error, error.message)}`);
    // responseError.innerText = error.message || "Error shortening link";
    return error;
  }
}
