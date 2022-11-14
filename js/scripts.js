// Seleção de elementos - Controle de menu-mobile
const menutBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Seleção de elementos - link's
const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
// Uso de um spread-operator "...", para espalhar uma lista DENTRO de outra lista.
// Caso contrário teriámos apenas uma lista de 02 elementos, contendo outra lista de "n" elementos.
// Particularmente acredito o certo seja: Operator, Spread...
const allLinks = [...desktopLinks, ...mobileLinks];

// Seleção de banner's e dot's selector's...
const slides = document.querySelectorAll(".banner")
const dots = document.querySelectorAll(".dot")
let slideIndex = 0;

// Funçòes
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 500);
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Eventos
/*
// 1° forma de realizar um "EventListener"...
menutBtn.addEventListener("click", (e) => {
  menu.classList.add("menu-active");
})

// 1° forma de realizar um "EventListener"...
closeMenuBtn.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
})
*/
// 2° forma de adicionar um "EventListener"
[menutBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  })
})

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll)
});

// Iniciação de Thread para animação de banner's, dando um BootStrap da "aplicação"
showSlides();