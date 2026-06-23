const menu = document.querySelector(".menu-mobile");
const overlay = document.querySelector(".overlay");
const button = document.querySelector(".menu-toggle");
const close = document.querySelector(".close");
const links = document.querySelectorAll(".menu-mobile a");

button.addEventListener("click", () => {
    console.log("Cliquei")
    menu.classList.add("active");
    overlay.classList.add("active");
});

close.addEventListener("click", fechar);

overlay.addEventListener("click", fechar);

function fechar(){
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

links.forEach(link => {
    link.addEventListener("click", fechar);
})