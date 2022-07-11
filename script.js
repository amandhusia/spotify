console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio('song.mp3');


let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let song = [
    {songName: "song", filePath:  "song/song.mp3", coverPath:"covers/song.jpg"}

]
 // audioElement.play();
 
//play\pause
masterplay.addEventListener('click',()=>{
    if(audioElement.pause || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.play();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity= 1;
       
    }
})


//lister
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})