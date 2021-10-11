const hamburger = document.querySelector(".hamburger");
const sidebarNav = document.querySelector(".sidebar__nav");
const sidebarItem = document.querySelectorAll(".sidebar__item");

hamburger.addEventListener("click", Menu);

function Menu() {
    hamburger.classList.toggle("active");
    sidebarNav.classList.toggle("active");
}

sidebarItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    sidebarNav.classList.remove("active");
}