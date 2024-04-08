import homeScript from "./pages/index.js";
import docsScript from "./pages/docs.js";

const pageTitle = "Short.ly";

document.addEventListener("click", (event) => {
  if (!event.target.matches("menu li a")) return;
  event.preventDefault();

  route(event);
});

const routes = {
  404: {
    template: "/404.html",
    title: "404 | Page not found",
    description: "Page not found.",
    mainFn: () => {},
  },
  "/": {
    template: "/src/pages/index.html",
    title: "Home | " + pageTitle,
    description: "The Shortcut to Shorter Links",
    mainFn: homeScript,
  },
  "/docs": {
    template: "/src/pages/docs.html",
    title: "API | " + pageTitle,
    description: "Short.ly API documentation for developers.",
    mainFn: docsScript,
  },
};

function route(event) {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  URLLocationHandler();
}

const homeAnchor = document.getElementById("home");
const docsAnchor = document.getElementById("docs");

// change content as location changes
async function URLLocationHandler() {
  const location = window.location.pathname;

  if (location.length == 0) {
    location = "/";
  }

  const route = routes[location] || routes["404"];
  const html = await fetch(route.template, {}).then((response) =>
    response.text()
  );

  document.getElementById("content").innerHTML = html;
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);

  if (location === "/") {
    homeAnchor.classList.add("active");
    docsAnchor.classList.remove("active");
  } else if (location === "/docs") {
    homeAnchor.classList.remove("active");
    docsAnchor.classList.add("active");
  }

  // homeAnchor.classList.add("active");

  route.mainFn?.();
}

// watch for url changes
// window.onpopstate = URLLocationHandler;
// window.route = route;

URLLocationHandler();
