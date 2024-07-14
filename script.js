let songs=[
    {name:"bewafa" , img:"./image/Bewafa.jpg" , url:"./music/bewafa.mpeg",time:"2:45"},
    {name:"Born-to-shine" , img:"./image/GOAT.jpg" , url:"./music/born-to-shine.mpeg",time:"2:50"},
    {name:"tauba-tauba" , img:"./image/tauba-tauba.jpg" , url:"./music/tauba-tauba.mpeg",time:"2:32"},
    {name:"Winning-Speech" , img:"./image/Winning-Speech.jpg" , url:"./music/winning-speech.mpeg",time:"2:55"}
];

let allsongs = document.querySelector(".all-song");
let leftimg = document.querySelector(".left img");
let forward = document.getElementById("forward");
let play = document.getElementById("play");
let backward = document.getElementById("backward");
let gif = document.querySelectorAll(".right-top img");



let audio = new Audio();

let selectedsong = 0;

function mainFunction(){
    let clutter = "";
    songs.forEach(function(ele,indx){
    clutter+=`<div class="song-card" id=${indx}>
                <div class="first">
                    <img src=${ele.img}>
                    <h2>${ele.name}</h2>
                </div>
                <h3>${ele.time}</h3>
            </div>`
});
audio.src = songs[selectedsong].url;
leftimg.src = songs[selectedsong].img;

if(selectedsong>0){
    backward.style.opacity=1;
}
if(selectedsong<songs.length-1){
    forward.style.opacity=1;
}

allsongs.innerHTML=clutter;
}
mainFunction();


allsongs.addEventListener("click",function(det){
    selectedsong= [det.target.id];
    mainFunction();
    play.innerHTML=`<i class="ri-pause-circle-fill"></i>`;
    flag=1;
    audio.play();
})
let flag = 0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-circle-fill"></i>`;
        mainFunction();
        audio.play();
        flag=1;
    }
    else{
        play.innerHTML=`<i class="ri-play-circle-fill"></i>`;
        mainFunction();
        audio.pause();
        gif.src="";
        flag=0;
    }
});
backward.addEventListener("click",function(){
    if(selectedsong < songs.length-1){
        selectedsong++;
        mainFunction();
        audio.play();
        play.innerHTML=`<i class="ri-pause-circle-fill"></i>`;
        
    }
    else{
        backward.style.opacity=0.4;
    }
});
forward.addEventListener("click",function(){
    if(selectedsong > 0){
        selectedsong--;
        mainFunction();
        audio.play();
        play.innerHTML=`<i class="ri-pause-circle-fill"></i>`;
    }
    else{
        forward.style.opacity=0.4;
    }
});