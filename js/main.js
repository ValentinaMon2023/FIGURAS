function circulo () {
    let figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
    //la función toggle agrega  y quita segun los click
    //claslist hace referencia  a todas las clases del elemento capturado(figura)
}

function rectangulo () {
    let figura = document.getElementById("figura");
    figura.classList.toggle("rectangulo");
}


function degradado() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("degradado");
}

function gif() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("gif");
}
function mtop() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("mtop");
}

function Abajo() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("abajo");
}


function izquierda() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("izquierda");
}

function derecha() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("derecha");
}
function diagonal() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("diagonal");
}
function animationOndas() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("animationOndas");
}

function panelLateral(){
    const panel = document.querySelector(".panel");
    panel.classList.toggle("active");
}

function modal(){
    const modal = document.querySelector("#modal");
    modal.classList.toggle("active");   
}