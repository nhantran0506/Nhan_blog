// window.addEventListener("load", function () {
//   const script = document.createElement("script");
//   script.src = "code.js";
//   document.body.appendChild(script);
// });



// Intro
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("active");
    }, (idx + 1) * 400);
  });
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("active");
        span.classList.add("fade");
      }, (idx + 1) * 50);
    });
  }, 2000);
  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2300);
});
//Img lazy loading
const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fadeIMG');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);


// time from post feature post
let today = new Date();
let datePost = new Date("2022,8,5");
let dateList = document.querySelectorAll(".since-date-post");

function timeInterval(datePost, today) {
  let timeSince = today.getTime() - datePost.getTime();
  if (Math.floor(timeSince / 60000) < 60) {
    timeSince = Math.floor(timeSince / 60000);
    return `${timeSince} min ago`;
  } else if (Math.floor(timeSince / (60000 * 60)) < 24) {
    timeSince = Math.floor(timeSince / (60000 * 60));
    return `${timeSince} hour ago`;
  } else if (Math.floor(timeSince / (60000 * 60 * 24)) < 365) {
    timeSince = Math.floor(timeSince / (60000 * 60 * 24));
    return `${timeSince} days ago`;
  } else if (Math.floor(timeSince / (60000 * 60 * 24 * 365)) >= 1) {
    timeSince = Math.floor(timeSince / (60000 * 60 * 24 * 365));
    return `${timeSince} year ago`;
  }
}

for (var i = 0; i < dateList.length; i++) {
  dateList[i].innerText = timeInterval(datePost, today);
}

// interactive

var postSec1=document.querySelector(".home-page-content");
let myBlog = document.querySelector(".myblog-page");
let musicPage = document.querySelector(".music-page");


postSec1.addEventListener("click", function (e) {
  if(e.target.style.color=="red"){
    e.target.style.color = "black";
  }
  else if(e.target.id=="heartIcon"){
    e.target.style.color="red";
    data-lazy(e.target);
  }
  
 
});

 myBlog.addEventListener("click", function (e) {
  if(e.target.style.color=="red"){
    e.target.style.color = "black";
  }
  else if(e.target.id=="heartIcon"){
    e.target.style.color="red";
    data-lazy(e.target);
  }
});

musicPage.addEventListener("click", function (e) {
  if(e.target.style.color=="red"){
    e.target.style.color = "black";
  }
  else if(e.target.id=="heartIcon"){
    e.target.style.color="red";
    data-lazy(e.target);
  }
}); 




let forWard = document.querySelector("#ar-right");
let backWard = document.querySelector("#ar-left");
let sec1 = document.querySelector("#sec-1");
let sec2 = document.querySelector("#sec-2");

page = 1;

sec2.addEventListener("click", function (e) {
  if (page == 1) {
    document.querySelector(".page-1").classList.remove("appear");
    document.querySelector(".page-2").classList.add("appear");
    forWard.style.opacity = "0.5";
    backWard.style.opacity = "1";
    page++;
  }
});
forWard.addEventListener("click", function (e) {
  if (page == 1) {
    document.querySelector(".page-1").classList.remove("appear");
    document.querySelector(".page-2").classList.add("appear");
    forWard.style.opacity = "0.5";
    backWard.style.opacity = "1";
    page++;
  }
});
sec1.addEventListener("click", function (e) {
  if (page == 2) {
    document.querySelector(".page-2").classList.remove("appear");
    document.querySelector(".page-1").classList.add("appear");
    backWard.style.opacity = "0.5";
    forWard.style.opacity = "1";
    page--;
  }
});
backWard.addEventListener("click", function (e) {
  if (page == 2) {
    document.querySelector(".page-2").classList.remove("appear");
    document.querySelector(".page-1").classList.add("appear");
    backWard.style.opacity = "0.5";
    forWard.style.opacity = "1";
    page--;
  }
});


// Nav pages
let allPost = document.querySelector("#all-posts");

let home = document.querySelector(".home-page");
let about = document.querySelector(".about-page");




let PageNav = document.querySelector(".nav-list");
PageNav.addEventListener("click", function (e) {
  if (e.target.id == "home") {
    home.classList.add("appear");
    about.classList.remove("appear");
    myBlog.classList.remove("appear");
    musicPage.classList.remove("appear");
  }
  if (e.target.id == "about") {
    about.classList.add("appear");
    myBlog.classList.remove("appear");
    home.classList.remove("appear");
    musicPage.classList.remove("appear");
  }
  if (e.target.id == "myBlog") {
    myBlog.classList.add("appear");
    about.classList.remove("appear");
    home.classList.remove("appear");
    musicPage.classList.remove("appear");
  }
  if (e.target.id == "music") {
    musicPage.classList.add("appear");
    about.classList.remove("appear");
    home.classList.remove("appear");
    myBlog.classList.remove("appear");
  }
  
});
allPost.addEventListener("click", function (e) {
  myBlog.classList.add("appear");
    about.classList.remove("appear");
    home.classList.remove("appear");
    musicPage.classList.remove("appear");
});
// music player
let music = document.getElementById("music-ctr");

const MusicList = [
  "Danosongs - Great World .mp3",
  "Danosongs - Shine Gold Light .mp3",
  "Vacation - AShamaluev Music.mp3",
  "Smile - AShamaluevMusic.mp3",
  "Danosongs - It's Your Year.mp3",
  "Danosongs - The Long Road Home.mp3",
  "Danosongs - Eyes of Time.mp3",
];

const ImgList = [
  "radio-white.jpg",
  "audio-throw.jpg",
  "green-white.jpg",
  "white.jpg",
  "two-dics.jpg",
  "micro-dark.jpg",
  "disc-white.jpg",
];

// music nav
function ChangeMusic(i) {
  var source = document.querySelector("#music_song");
  source.src = "music list/" + MusicList[i];
  var img = document.querySelector("#music_bg");
  img.src = "pic/" + ImgList[i];
  music.load();
  music.play();
  document.querySelector("#music_sec").classList.remove("fa-play");
  document.querySelector("#music_sec").classList.add("fa-pause");
  document.querySelector(".song-name").innerText=MusicList[i].slice(0,-4);
}
function PlayMusic() {
  music.play();

  document.querySelector("#music_sec").classList.remove("fa-play");
  document.querySelector("#music_sec").classList.add("fa-pause");
  document.getElementById("music_button").setAttribute("onClick", "StopMusic()");
}

function StopMusic() {
  music.pause();

  document.querySelector("#music_sec").classList.remove("fa-pause");
  document.querySelector("#music_sec").classList.add("fa-play");
  document.getElementById("music_button").setAttribute("onClick", "PlayMusic()");
}

musicIndex = 0;
function ForwardMusic() {
  musicIndex++;
  if (musicIndex >= MusicList.length) {
    musicIndex = 0;
  }
  ChangeMusic(musicIndex);
}

function BackMusic() {
  if (musicIndex == 0) {
    musicIndex = MusicList.length - 1;
  } else {
    musicIndex--;
  }
  ChangeMusic(musicIndex);
}

// music time update


music.ontimeupdate = function () {
  update();
};

function update() {
  var currentMin = Math.floor(music.currentTime / 60);
  var durationMin = Math.floor(music.duration / 60);
  var currentSec = Math.floor(music.currentTime % 60);
  var durationSec = Math.floor(music.duration % 60);
  if (currentSec < 10) {
    document.querySelector(
      "#current_progress"
    ).innerHTML = `${currentMin}:0${currentSec}`;
  } else if (currentSec >= 10) {
    document.querySelector(
      "#current_progress"
    ).innerHTML = `${currentMin}:${currentSec}`;
  }

  if (durationSec < 10) {
    document.querySelector(
      "#song_duration"
    ).innerHTML = `${durationMin}:0${durationSec}`;
  } else {
    document.querySelector(
      "#song_duration"
    ).innerHTML = `${durationMin}:${durationSec}`;
  }

  if ((music.currentTime / music.duration) * 100 == 100) {
    ForwardMusic();
  }
  document.querySelector("#progress").style.width = `${
    (music.currentTime / music.duration) * 100
  }%`;
}

propressBar = document.querySelector(".propress_area");

function ChangeCT(event) {
  music.currentTime = (event.offsetX / propressBar.clientWidth) * music.duration;
}

// create MusicList


var ListMusic = document.querySelector("#music-list");
ListMusic.addEventListener("click", function (e) {
  if (e.target.id == "music-list") {
    return;
  }
  console.log(e.target);
  ChangeMusic(e.target.id);
  musicIndex = e.target.id;
});

let musicSongItemsBG =document.querySelectorAll(".song-pic");

for (var i = 0; i < ImgList.length; i++){
  var li=document.createElement('li');
  li.id=`${i}`;
  li.innerHTML =`<img src="${"pic/"+ImgList[i]}" alt="" class="song-pic">
  ${MusicList[i].slice(0,-4)}
 `;

  ListMusic.appendChild(li);

}

