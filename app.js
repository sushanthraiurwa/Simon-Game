let gameSequence=[];
let userSequence=[];
let start=false;
let level=0;
let highestScore=0;

let colorDivs=["yellow","red","green","blue"];

let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let body=document.querySelector("body");

document.addEventListener("keypress",function(){
if(start==false){
    start=true;
}
console.log("key pressed");
levelUp();

});

function gameFlash(event){
event.classList.add("flash");
setTimeout(function(){
    event.classList.remove("flash");
},250)

}

function userFlash(event){
    event.classList.add("userFlash");
    setTimeout(function(){
        event.classList.remove("userFlash");
    },250)
   
    }

function levelUp(){
    userSequence=[];
    level++;
    
    h3.innerText= `Level ${level}`;

    let randomIndex=Math.floor(Math.random()*3)+1;
    let randomColor=colorDivs[randomIndex];
    let buttonClicked= document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);

    gameFlash(buttonClicked);

}
function reset(){
    gameSequence=[];
    userSequence=[];
    start=false;
    level=0;

}

function checkButton(index){
  
    if(gameSequence[index]===userSequence[index]){
        if(gameSequence.length==userSequence.length){
              setTimeout(levelUp,1000);
        }
   
    }else{
        if(highestScore<level){
            highestScore=level;
        }
        body.classList.add("bodyFlash");
        setTimeout(function(){
            body.classList.remove("bodyFlash");
        },150)
        h2.innerHTML=`Ypur Highest Score = <b>${highestScore}</b>`;
        h3.innerHTML= `Game Over Your Point is <b>${level}!</b> <br> Press Any Key to Start Again`;
        reset();
      
    }
}



function buttonPressed(){
let btn=this;


console.dir(userSequence)
userFlash(btn);
userSequence.push(btn.id);
checkButton(userSequence.length-1);
}


///waiting
let allButton=document.querySelectorAll(".btn");
for(btn of allButton){
    btn.addEventListener("click",buttonPressed);
}