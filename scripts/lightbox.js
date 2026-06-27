const imagens = document.querySelectorAll('.lightbox-trigger');

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

function abrirLightbox(src){
    lightbox.classList.add("active");
    lightboxImg.src = src;
}

function fecharLightbox(){
    lightbox.classList.remove("active");
}

imagens.forEach((img) => {

    img.addEventListener("click", () => {
        abrirLightbox(img.src);
    });

});

closeBtn.addEventListener("click", fecharLightbox);

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){
        fecharLightbox();
    }

});