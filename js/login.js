const loginBtn = document.querySelector('#login-form');

function onSubmit(e){
    e.preventDefault();
    window.location="./main.html"
}
loginBtn.addEventListener('submit',onSubmit);