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
    const referrer = document.referrer;
    const fromParameter = new URLSearchParams(window.location.href).get("from");
    fetch("https://personaltracker-1-g7781331.deta.app/", {
      method: "POST",
      body: JSON.stringify({ from: fromParameter ?? referrer }),
    });
  }
});
