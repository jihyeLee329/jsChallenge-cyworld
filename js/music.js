const musicForm = document.querySelector("#music");
const musicBox = musicForm.querySelector("#music-box");
const playBtn = musicForm.querySelector("#btnPlay");
const pauseBtn = musicForm.querySelector("#btnPause");
const nextBtn = musicForm.querySelector("#btnNext");
const musicInfo = musicForm.querySelector(".music-info");
const musicAlbum = musicForm.querySelector('.music-album');

const MUSIC_COUNT = 3;
let currentAudio = 0;

const singerArray = ["키네틱플로우", "에픽하이", "박효신", "프리스타일"];
const titleArray = ["몽환의숲", "우산", "눈의꽃", "Y"];
const musicArray = [
  "키네틱플로우-몽환의숲.mp3",
  "에픽하이-우산.mp3",
  "박효신-눈의꽃.mp3",
  "프리스타일-y.mp3",
];


function playMusic() {
  musicBox.volume = 1;
  musicBox.play();
}

function pauseMusic(){
    musicAlbum.style.animationName = "";
    musicBox.pause();
}

function loadMusic(){
    const source = document.querySelector('#musicSource');
    source.src= `./mp3/${musicArray[currentAudio]}`;
    musicBox.load();
    showCurrentMusic();
    musicAlbum.style.animationName = "rotateAlbum";
    playMusic();
}

function showCurrentMusic(){
    musicAlbum.src= `./img/music_${currentAudio}.jpg`;
    musicInfo.innerHTML = `<span>${singerArray[currentAudio]} - ${titleArray[currentAudio]}</span>`;
    
}

function getCurrentTime(){
    const progressbar = document.querySelector('.play-progress-bar');
    let currentSeconds = parseInt(musicBox.currentTime);
    const musicDuration = parseInt(musicBox.duration);
    let currentMinutes = 0;
    let currentTimeBar = (currentSeconds / musicDuration)*100;
    currentTimeBar = currentTimeBar.toFixed(2);
    progressbar.style.width = `${currentTimeBar}%`; 
    // console.log(`${currentSeconds} / ${musicDuration}`)
    // if(currentSeconds >= 60){
    //     currentMinutes += 1;
    //     currentSeconds = currentSeconds - 60; 
    // }else if(currentSeconds >= 120){
    //     currentMinutes += 2;
    //     currentSeconds = currentSeconds - 120; 
    // }else if(currentSeconds >= 180){
    //     currentMinutes += 3;
    //     currentSeconds = currentSeconds - 180; 
    // }else if(currentSeconds >= 240){
    //     currentMinutes += 4;
    //     currentSeconds = currentSeconds - 240; 
    // }
    // console.log(`${currentMinutes}:${currentSeconds} `);
};

function handleNextButton(){
    if(currentAudio < MUSIC_COUNT){
        currentAudio +=1;
    }else{
        currentAudio = 0;
    }
    musicBox.pause();
    loadMusic();
}

// 재생 버튼
playBtn.addEventListener("click", loadMusic);
// 일시정지 버튼
pauseBtn.addEventListener('click', pauseMusic);
// 다음 버튼
nextBtn.addEventListener('click',handleNextButton);
// 노래 끝나면
musicBox.addEventListener('ended', handleNextButton);

showCurrentMusic();

setInterval(getCurrentTime, 1000)