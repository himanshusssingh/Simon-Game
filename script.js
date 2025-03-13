let gameseq = [];
let userseq = [];
let level = 0;
let start = false;
let colors = ["red","yellow","green","purple"];

let h3 = document.querySelector("h3");

function gameflash(col){
    let btn = document.getElementById(`${col}`);
    console.log(btn);
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    }, 2*100);
}

function userflash(col){
    let btn = document.getElementById(`${col}`);
    console.log(btn);
    btn.classList.add("black");
    setTimeout(function(){
        btn.classList.remove("black");
    }, 2*100);
}

function levelup(){
    userseq = [];
    level++;
    h3.innerHTML = `Level ${level}`;
    let randidx = Math.floor( Math.random()*3 );
    let randcol = colors[randidx];
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(randcol);
}


document.addEventListener("keypress", function(){
    if (!start){
        start = true;
        levelup();
    }
})

function checkAns(idx){
    if(gameseq[idx] === userseq[idx]){
        console.log(gameseq);
        if(userseq.length === gameseq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h3.innerHTML = `<b>Game Over! Your Score: ${level}</b>. <br> Press any key to Restart.`;
        start = false;
        gameseq = [];
        userseq = [];
        level = 0;
    }
}

function btnpress(){
    let col = this.id;
    userseq.push(col);
    userflash(col);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}


