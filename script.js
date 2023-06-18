let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-btn-container');
let formBtn=document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let videoBtn=document.querySelectorAll('.vid-btn');


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;        
    });

});




