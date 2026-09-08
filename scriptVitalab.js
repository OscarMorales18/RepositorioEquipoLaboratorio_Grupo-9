const Logo = document.getElementById("Logo");
const barra_lateral = document.querySelector(".barra_lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo")
const menu = document.querySelector(".Menu")
const main = document.querySelector("main")

const PrimerBoton = document.getElementById("PrimerBoton");
const SegundoBoton = document.getElementById("SegundoBoton");
const TercerBoton = document.getElementById("TercerBoton");
const CuartoBoton = document.getElementById("CuartoBoton");
const QuintoBoton = document.getElementById("QuintoBoton");
const SextoBoton = document.getElementById("SextoBoton");
const SeptimoBoton = document.getElementById("SeptimoBoton");

let $ = (clase) => document.querySelector(clase);

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

PrimerBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("desplegado");
    $("#SegundoContenido").classList.add("oculto");
    $("#TercerContenido").classList.add("oculto");
    $("#CuartoContenido").classList.add("oculto");
    $("#QuintoContenido").classList.add("oculto");
    $("#SextaContenido").classList.add("oculto");
    $("#SeptimaContenido").classList.add("oculto");

    $("#PrimerContenido").classList.remove("oculto");
    $("#SegundoContenido").classList.remove("desplegado");
    $("#TercerContenido").classList.remove("desplegado");
    $("#CuartoContenido").classList.remove("desplegado");
    $("#QuintoContenido").classList.remove("desplegado");
    $("#SextaContenido").classList.remove("desplegado");
    $("#SeptimaContenido").classList.remove("desplegado");
})

SegundoBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("oculto");
    $("#SegundoContenido").classList.add("desplegado");
    $("#TercerContenido").classList.add("oculto");
    $("#CuartoContenido").classList.add("oculto");
    $("#QuintoContenido").classList.add("oculto");
    $("#SextaContenido").classList.add("oculto");
    $("#SeptimaContenido").classList.add("oculto");

    $("#PrimerContenido").classList.remove("desplegado");
    $("#SegundoContenido").classList.remove("oculto");
    $("#TercerContenido").classList.remove("desplegado");
    $("#CuartoContenido").classList.remove("desplegado");
    $("#QuintoContenido").classList.remove("desplegado");
    $("#SextaContenido").classList.remove("desplegado");
    $("#SeptimaContenido").classList.remove("desplegado");
})

TercerBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("oculto");
    $("#SegundoContenido").classList.add("oculto");
    $("#TercerContenido").classList.add("desplegado");
    $("#CuartoContenido").classList.add("oculto");
    $("#QuintoContenido").classList.add("oculto");
    $("#SextaContenido").classList.add("oculto");
    $("#SeptimaContenido").classList.add("oculto");

    $("#PrimerContenido").classList.remove("desplegado");
    $("#SegundoContenido").classList.remove("desplegado");
    $("#TercerContenido").classList.remove("oculto");
    $("#CuartoContenido").classList.remove("desplegado");
    $("#QuintoContenido").classList.remove("desplegado");
    $("#SextaContenido").classList.remove("desplegado");
    $("#SeptimaContenido").classList.remove("desplegado");
})

CuartoBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("oculto");
    $("#SegundoContenido").classList.add("oculto");
    $("#TercerContenido").classList.add("oculto");
    $("#CuartoContenido").classList.add("desplegado");
    $("#QuintoContenido").classList.add("oculto");
    $("#SextaContenido").classList.add("oculto");
    $("#SeptimaContenido").classList.add("oculto");

    $("#PrimerContenido").classList.remove("desplegado");
    $("#SegundoContenido").classList.remove("desplegado");
    $("#TercerContenido").classList.remove("desplegado");
    $("#CuartoContenido").classList.remove("oculto");
    $("#QuintoContenido").classList.remove("desplegado");
    $("#SextaContenido").classList.remove("desplegado");
    $("#SeptimaContenido").classList.remove("desplegado");
})

QuintoBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("oculto");
    $("#SegundoContenido").classList.add("oculto");
    $("#TercerContenido").classList.add("oculto");
    $("#CuartoContenido").classList.add("oculto");
    $("#QuintoContenido").classList.add("desplegado");
    $("#SextaContenido").classList.add("oculto");
    $("#SeptimaContenido").classList.add("oculto");

    $("#PrimerContenido").classList.remove("desplegado");
    $("#SegundoContenido").classList.remove("desplegado");
    $("#TercerContenido").classList.remove("desplegado");
    $("#CuartoContenido").classList.remove("desplegado");
    $("#QuintoContenido").classList.remove("oculto");
    $("#SextaContenido").classList.remove("desplegado");
    $("#SeptimaContenido").classList.remove("desplegado");
})

SextoBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("oculto");
    $("#SegundoContenido").classList.add("oculto");
    $("#TercerContenido").classList.add("oculto");
    $("#CuartoContenido").classList.add("oculto");
    $("#QuintoContenido").classList.add("oculto");
    $("#SextaContenido").classList.add("desplegado");
    $("#SeptimaContenido").classList.add("oculto");

    $("#PrimerContenido").classList.remove("desplegado");
    $("#SegundoContenido").classList.remove("desplegado");
    $("#TercerContenido").classList.remove("desplegado");
    $("#CuartoContenido").classList.remove("desplegado");
    $("#QuintoContenido").classList.remove("desplegado");
    $("#SextaContenido").classList.remove("oculto");
    $("#SeptimaContenido").classList.remove("desplegado");
    
})

SeptimoBoton.addEventListener("click",()=>{
    $("#PrimerContenido").classList.add("oculto");
    $("#SegundoContenido").classList.add("oculto");
    $("#TercerContenido").classList.add("oculto");
    $("#CuartoContenido").classList.add("oculto");
    $("#QuintoContenido").classList.add("oculto");
    $("#SextaContenido").classList.add("oculto");
    $("#SeptimaContenido").classList.add("desplegado");

    $("#PrimerContenido").classList.remove("desplegado");
    $("#SegundoContenido").classList.remove("desplegado");
    $("#TercerContenido").classList.remove("desplegado");
    $("#CuartoContenido").classList.remove("desplegado");
    $("#QuintoContenido").classList.remove("desplegado");
    $("#SextaContenido").classList.remove("desplegado");
    $("#SeptimaContenido").classList.remove("oculto");
})