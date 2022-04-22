const loginBtn = document.querySelector('#login-form');

function onSubmit(e){
    e.preventDefault();
    window.location="index.html"
}
loginBtn.addEventListener('submit',onSubmit);