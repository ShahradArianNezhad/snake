let velocityX = 0;
let velocityY = 0;
let gameOver = false;

let head = document.querySelector(".wormhead");

document.querySelector("body").addEventListener("keydown",(event)=>{
    if((event.key==="ArrowUp"&&body.length===1)||(event.key==="ArrowUp"&&velocityY!==-1)){
        velocityX=0
        velocityY=1
    }else if((event.key==="ArrowDown"&&body.length===1)||(event.key==="ArrowDown"&&velocityY!==1)){
        velocityX=0
        velocityY=-1
    }else if((event.key==="ArrowLeft"&&body.length===1)||(event.key==="ArrowLeft"&&velocityX!==1)){
        velocityX=-1
        velocityY=0
    }else if((event.key==="ArrowRight"&&body.length===1)||(event.key==="ArrowRight"&&velocityX!==-1)){
        velocityX=1
        velocityY=0
    }
})

function createFruit(){
    fruitX=parseInt(Math.random()*20)
    fruitY=parseInt(Math.random()*20)
    fruit = document.createElement("div")
    fruit.style.left=(fruitX*20)+'px'
    fruit.style.bottom=(fruitY*20)+'px'
    fruit.style.width="20px"
    fruit.style.height="20px"
    fruit.style.position="absolute"
    fruit.style.backgroundColor="red"
    document.querySelector(".box").appendChild(fruit)
}
createFruit()

function update() {
    body = document.querySelectorAll(".body")
    posX = parseInt(getComputedStyle(head).left);
    posY = parseInt(getComputedStyle(head).bottom);
    prevPosxHead=posX
    prevPosYHead=posY
    prevPosx=parseInt(getComputedStyle(body[body.length-1]).left)
    prevPosY=parseInt(getComputedStyle(body[body.length-1]).bottom)
    if(posX+20>=400 & velocityX ==1){gameOver = true; return 0}
    if(posY+20>=400 & velocityY ==1){gameOver = true; return 0}
    if(posX-20<=-20 & velocityX ==-1){gameOver = true; return 0}
    if(posY-20<=-20 & velocityY ==-1){gameOver = true; return 0}    
    if(gameOver===true){
        document.querySelector(".gameover").style.display="inline"
        return 0
    }
    for(let i=body.length-1;i>0;i--){
        body[i].style.left = getComputedStyle(body[i-1]).left
        body[i].style.bottom = getComputedStyle(body[i-1]).bottom
    }
    if (velocityX === 1) {
        if(body.length>1){
            head.style.borderRadius = '0px'
            head.style.borderTopRightRadius= "8px"
            head.style.borderBottomRightRadius= "8px"
        }
        head.style.left = (posX+20)+'px';
        posX = parseInt(getComputedStyle(head).left);
    }
    if (velocityY === 1) {
        if(body.length>1){
            head.style.borderRadius = '0px'
            head.style.borderTopRightRadius= "8px"
            head.style.borderTopLeftRadius= "8px"
        }
        head.style.bottom = (posY + 20) + 'px';
        posY = parseInt(getComputedStyle(head).bottom);
    }
    if (velocityX === -1) {
        if(body.length>1){
            head.style.borderRadius = '0px'
            head.style.borderTopLeftRadius= "8px"
            head.style.borderBottomLeftRadius= "8px"
        }
        head.style.left = (posX - 20) + 'px';
        posX = parseInt(getComputedStyle(head).left);
    }
    if (velocityY === -1) {
        if(body.length>1){
            head.style.borderRadius = '0px'
            head.style.borderBottomRightRadius= "8px"
            head.style.borderBottomLeftRadius= "8px"
        }
        head.style.bottom = (posY - 20) + 'px';
        posY = parseInt(getComputedStyle(head).bottom);
    }
    for(let i=body.length-1;i>0;i--){
        if(head.style.left ===getComputedStyle(body[i]).left && head.style.bottom ===getComputedStyle(body[i]).bottom&&i!=0){gameOver = true}
    }   
    if(posX===fruitX*20&posY===fruitY*20){
        document.querySelector(".box").removeChild(fruit)
        createFruit()
        worm = document.createElement("div")
        worm.style.width = "20px"
        worm.style.height = "20px"
        worm.style.position = "absolute"
        worm.style.backgroundColor = "rgb(0, 247, 0)"
        worm.classList.add("body")
        worm.style.left = prevPosx
        worm.style.bottom = prevPosY
        document.querySelector(".box").appendChild(worm)
        if(velocityY===-1){
            head.style.borderRadius = '0px'
            head.style.borderBottomRightRadius= "8px"
            head.style.borderBottomLeftRadius= "8px"
        }
        if(velocityY===1){
            head.style.borderRadius = '0px'
            head.style.borderTopRightRadius= "8px"
            head.style.borderTopLeftRadius= "8px"
        }
        if(velocityX===-1){
            head.style.borderRadius = '0px'
            head.style.borderTopLeftRadius= "8px"
            head.style.borderBottomLeftRadius= "8px"
        }
        if(velocityX===1){
            head.style.borderRadius = '0px'
            head.style.borderTopRightRadius= "8px"
            head.style.borderBottomRightRadius= "8px"
        }
    }
}
setInterval(update,650)


