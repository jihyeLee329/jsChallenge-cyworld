const weatherForm = document.querySelector('.weather');
const APIKEY = "6ff7ed54a17e5fb61040d63127c63079";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then((data) =>{ console.log(data)
       const temp = data.main.temp;
       const location = data.name;
       const weather = data.weather[0].main;
       weatherForm.innerHTML = `<span>현재 위치 ${location}</span><br/><span>기온:${temp} / 기후:${weather}</span>`;
    });
}
//위치 잡아오기 실패 시
function onGeoError(){
    alert("현재 위치를 찾을 수 없습니다. 날씨 정보를 제공하기 어렵습니다. ");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);