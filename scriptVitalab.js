const Logo = document.getElementById("Logo");
const barra_lateral = document.querySelector(".barra_lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".Menu")
const main = document.querySelector("main")

menu.addEventListener("click",()=>{
    barra_lateral.classList.toggle("max_barra_lateral");
    if(barra_lateral.classList.contains("max_barra_lateral")){
        menu.children[0].style.display ="none";
        menu.children[1].style.display ="block";
    }
    else {
        menu.children[0].style.display ="block";
        menu.children[1].style.display ="none";
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

Logo.addEventListener("click",()=>{
    barra_lateral.classList.toggle("mini_barra_lateral");
    main.classList.toggle("min_main");  
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});