const loginForm = document.querySelector('#login-form');
const userName = loginForm.querySelector('#userID');
const USERNAME_KEY = 'username';
function onSubmit(e){
    e.preventDefault();
    const user = userName.value;
    localStorage.setItem(USERNAME_KEY,user);
    window.location="./main.html"
}
loginForm.addEventListener('submit',onSubmit);