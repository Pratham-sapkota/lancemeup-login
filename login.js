const togglePassword = document.querySelector('.form-eye-toggle');
const pW = document.querySelector('.password');
togglePassword.addEventListener('click', ()=> {
    const type = pW.getAttribute('type') === 'password' ? 'text' : 'password';
    pW.setAttribute('type', type);
    togglePassword.classList.toggle('active');
});

const icon=document.querySelector('.fa-bars');
const menu=document.querySelector('.menu');
icon.addEventListener('click',()=>{
    menu.classList.toggle('change')
});
