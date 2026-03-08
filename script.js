/* =====================================
SLIDER PRINCIPAL
===================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".direita");
const prev = document.querySelector(".esquerda");

let index = 0;

function mostrarSlide(i){

if(!slides.length) return;

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");

index = i;

}

/* botão direita */

if(next){

next.addEventListener("click",()=>{

index++;

if(index >= slides.length){
index = 0;
}

mostrarSlide(index);

});

}

/* botão esquerda */

if(prev){

prev.addEventListener("click",()=>{

index--;

if(index < 0){
index = slides.length -1;
}

mostrarSlide(index);

});

}

/* bolinhas */

if(dots.length){

dots.forEach((dot,i)=>{

dot.addEventListener("click",()=>{
mostrarSlide(i);
})

});

}

/* auto slide */

if(slides.length){

setInterval(()=>{

index++;

if(index >= slides.length){
index = 0;
}

mostrarSlide(index);

},5000);

}



/* =====================================
CARROSSEL DE CATEGORIAS
===================================== */

const setaEsquerda = document.querySelector(".seta-categoria.esquerda");
const setaDireita = document.querySelector(".seta-categoria.direita");
const produtos = document.querySelector(".produtos");

const distanciaScroll = 200;

if(setaDireita && produtos){

setaDireita.addEventListener("click", () => {

produtos.scrollBy({
left: distanciaScroll,
behavior: "smooth"
});

});

}

if(setaEsquerda && produtos){

setaEsquerda.addEventListener("click", () => {

produtos.scrollBy({
left: -distanciaScroll,
behavior: "smooth"
});

});

}



/* =====================================
ANIMAÇÃO AO ROLAR A PÁGINA
===================================== */

const elementosAnimados = document.querySelectorAll('.animado');

if(elementosAnimados.length){

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add('visivel');
} else {
entry.target.classList.remove('visivel');
}

});

},{threshold:0.2});

elementosAnimados.forEach(el => observer.observe(el));

}



/* =====================================
MENU HAMBURGUER
===================================== */

const hamburguer = document.querySelector('.menu-hamburguer');
const menuLateral = document.querySelector('.menu-lateral');
const body = document.querySelector('body');

if(hamburguer && menuLateral){

/* abrir menu */

hamburguer.addEventListener('click', (e) => {

e.stopPropagation();

menuLateral.classList.toggle('ativo');
hamburguer.classList.toggle('ativo');
body.classList.toggle('menu-aberto');

});


/* fechar clicando fora */

document.addEventListener('click', (e) => {

if(menuLateral.classList.contains('ativo') &&
!menuLateral.contains(e.target) &&
!hamburguer.contains(e.target)){

menuLateral.classList.remove('ativo');
hamburguer.classList.remove('ativo');
body.classList.remove('menu-aberto');

}

});


/* fechar ao rolar */

window.addEventListener('scroll', () => {

if(menuLateral.classList.contains('ativo')){

menuLateral.classList.remove('ativo');
hamburguer.classList.remove('ativo');
body.classList.remove('menu-aberto');

}

});


/* fechar ao clicar link */

document.querySelectorAll('.menu-lateral a').forEach(link => {

link.addEventListener('click', () => {

menuLateral.classList.remove('ativo');
hamburguer.classList.remove('ativo');
body.classList.remove('menu-aberto');

});

});

}