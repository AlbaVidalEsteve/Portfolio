const BOTON= document.querySelector('#icono i');
const ENLACES = document.querySelector('#enlaces');
const SUN= document.querySelector('#sun');
const MODE = document.querySelector('#mode');

// window.addEventListener('load', ()=>{
//     ENLACES.classList.remove('open');
// });

BOTON.addEventListener('click', ()=>{
    ENLACES.classList.toggle('open');
    setTimeout(() =>{
        BOTON.classList.toggle('fa-xmark');
    }, 600);
});

SUN.addEventListener('click', ()=>{
    MODE.classList.toggle('dark');
    setTimeout(() =>{
        SUN.classList.toggle('fa-sun');
        SUN.classList.toggle('fa-moon');
    }, 600);
});
