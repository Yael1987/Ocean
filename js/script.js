let dayNight = document.querySelector('.day-night');
let menuToggle = document.querySelector('.menu-toggle');
let body = document.querySelector('body');
let navigation = document.querySelector('.navigation')

dayNight.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    dayNight.classList.toggle('active');
});

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active')
});

