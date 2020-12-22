var picArr = document.getElementsByClassName("picArr");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var navIcon = document.getElementsByClassName("navicon");
var index = 0;
//初始化图片的类名
var iniClass = function(){
    for(var i=0; i<picArr.length; i++){
        picArr[i].className = "picArr";
    }
}
//改变后的图片类名
var changeClass = function(){
    iniClass();
    picArr[index].className = "picArr Active";
}
//方向键控制图片
function imgChange(){
  //点击右方向键图片变下一张
    nextBtn.addEventListener("click",function(){
        if(index<picArr.length-1){
            index++; 
        }
      else{
        index=0;
      }
      changeClass();
    });
    //  //点击右方向键图片变上一张
    prevBtn.addEventListener("click",function(){
      
        if(index>0){
          
            index--;
           
        }
      else{
        index=picArr.length-1;
      }
    changeClass();
    })
}
//加一个定时器，图片自动切换
imgChange();
function autoMove(){
   setInterval(function(){
    if(index<picArr.length-1){
        index++;       
    }
  else{
    index=0;
  }
  changeClass();    
   },3000);  
}
autoMove();
//导航栏
 var nav = function(){ 
  if(index<picArr.length-1){
        index++;       
    }
  else{
    index=0;
  } 
  navIcon[index].style.backgroundColor = "black";

} 
function navMove(){
  autoMove(); 
   nav();
}
navMove();
    

