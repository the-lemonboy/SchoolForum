const prevbtn = document.getElementById("prevbtn");
const nexttbtn = document.getElementById("nextbtn");
const music = document.getElementById("music");
const pausebtn = document.getElementById("pausebtn");
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
//获取歌单
var audios =new Array("../audio/lyall.mp3", "../audio/oww.mp3");
var i = 0;
//播放暂停
var play = false;
function pausefun(){
    pausebtn.addEventListener("click", function(){
        //判断当前是否在播放
        play = !play;
        
     if (play){
        pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
         music.play(); 
     }else{
        pausebtn.innerHTML = '<img src="../images/childImages/pause2.png">';
         music.pause();
     }
    
    });
}
//下一首
 function nextfun(){
    nextbtn.addEventListener("click", function(){
        
        if(i==audios.length-1){
            alert("当前为最后一首!");
        }
        else{
            pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
            i++;
            music.src = audios[i];
            music.play();
        }
        
    });
}
//上一首
function prevfun(){
    prevbtn.addEventListener("click", function(){
        if(i==0){
            alert("当前为第一首!");
        }
        else{
            pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
            i--;
            music.src = audios[i];
            music.play();
        }
    });
} 
function listSongfun(){
    song1.addEventListener("click",function(){
        pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
        music.src=audios[1];
        music.play();
    })
    song2.addEventListener("click",function(){
        pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
        music.src=audios[0];
        music.play();
    })
    song3.addEventListener("click",function(){
        pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
        music.src=audios[0];
        music.play();
    })
    song4.addEventListener("click",function(){
        pausebtn.innerHTML = '<img src="../images/childImages/pause1.png">';
        music.src=audios[0];
        music.play();
    })
}
 pausefun();
 nextfun();
prevfun(); 
listSongfun();
