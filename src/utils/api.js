const BASE_URL = "https://urishortener.onrender.com/Uri/create-url";

export async function shortener(payload) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    mode: "no-cors",
  };

  try {
    const response = await fetch(BASE_URL, requestOptions);
    return response.text();
  } catch (error) {
    console.error(`ERROR SHORTENING LINK: ${error}`);
    return error;
  }
}
