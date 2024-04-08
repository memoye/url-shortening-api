document.addEventListener("click", (event) => {
  if (!event.target.matches("menu li a")) return;
  event.preventDefault();

  route(event);
});

const routes = {
  404: {
    template: "./pages/404.html",
    title: "Short.ly | Page not found",
    description: "Page not found.",
  },
  "/": {
    template: "/src/pages/index.html",
    title: "Short.ly",
    description: "The Shortcut to Shorter Links",
  },
  "/docs": {
    template: "/src/pages/docs.html",
    title: "Short.ly | API Doc",
    description: "Short.ly API documentation for developers.",
  },
};

function route(event) {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  URLLocationHandler();
}

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
}

// watch for url changes
window.onpopstate = URLLocationHandler;
window.route = route;

URLLocationHandler();
