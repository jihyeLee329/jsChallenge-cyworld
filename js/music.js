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
  musicBox.loop = true;
  musicBox.play();
}

function pauseMusic(){
    musicBox.pause();
}

function loadMusic(){
    const source = document.querySelector('#musicSource');
    source.src= `./mp3/${musicArray[currentAudio]}`;
    
    musicBox.load();
    playMusic();
}

function showFirstMusic(){
    musicAlbum.src= `./img/music_${currentAudio}.jpg`;
    musicInfo.innerText = `${singerArray[currentAudio]} - ${titleArray[currentAudio]}`;
}

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

nextBtn.addEventListener('click',handleNextButton);

showFirstMusic();