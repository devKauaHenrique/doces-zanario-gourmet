const btnToTop = document.getElementById('back-to-top');

function scrollToTop(){
    window.scrollTo(0,0)
}

window.onscroll = function(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        btnToTop.style.display = "block";
    }
    else{
        btnToTop.style.display = "none";
    }
}