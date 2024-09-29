//simon says game code logic building code.

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "pink", "blue", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash"); 
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
         setTimeout(levelUp, 1000);
       }
    } 
    else{
        h3.innerHTML = `Game Over!!. Your score was <b>${level}</b>.<br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 220);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


