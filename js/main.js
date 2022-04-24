const greeting = document.querySelector('.greeting');
const getUser = localStorage.getItem('username');
greeting.innerHTML = `안녕,<br/> ${getUser}! `;
if(getUser == null){
    window.location="./index.html"
}