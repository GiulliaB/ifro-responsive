import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const sidebar = document.getElementById("sidebar");

  menuButton?.addEventListener("click", () => {
    sidebar?.classList.toggle("show");
  });
});

