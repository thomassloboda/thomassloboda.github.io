if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js", { scope: "./" })
    .catch(function (err) {
      console.log("Service Worker Failed to Register", err);
    });
}

document.addEventListener("readystatechange", function (e) {
  if (e.target.readyState === "complete") {
    document.querySelectorAll("img[data-lazysrc]").forEach(function (img) {
      img.setAttribute("src", img.getAttribute("data-lazysrc"));
    });
  }
});
