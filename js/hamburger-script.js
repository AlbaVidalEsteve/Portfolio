const SUN= document.querySelector('#sun');
const MODE = document.querySelector('#mode');

SUN.addEventListener('click', ()=>{
    MODE.classList.toggle('dark');
    setTimeout(() =>{
        SUN.classList.toggle('fa-sun');
        SUN.classList.toggle('fa-moon');
    }, 600);
});
