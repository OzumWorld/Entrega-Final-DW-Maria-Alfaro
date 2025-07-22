// index.js

// Insertar header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

// Insertar footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
  });

// Fade-in mágico al cargar secciones con clase .fade-in
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 300);
  });
});
