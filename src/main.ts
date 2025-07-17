import "./style.css";

console.log("Portal IFRO carregado.");

const menuBtn = document.getElementById('menu-btn') as HTMLButtonElement;
const nav = document.getElementById('nav-links') as HTMLElement;

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});


