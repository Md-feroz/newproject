let menuBtn = document.querySelector('#menuBtn');
let navBar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('show');
});