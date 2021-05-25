const navlogo = document.querySelector('.navlogo');
const navManu = document.querySelector('.navmanu');
navlogo.addEventListener('click', function(){
    navManu.classList.toggle('show');
})