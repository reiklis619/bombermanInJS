const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const w = canvas.width = 600;
const h = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'img/bomber.png';
let stateBomber = "victory" ;
var escala = 4;
var spriteW = 16;
var spriteH = 23.5;
let gameFrame = 0;
let staggerFrames = 5;
let spriteAnimations = [];
let animationStates = [
    {
        name: 'down',
        frames: 5,
    },
    {
        name: 'right',
        frames: 5,
    },
    {
        name: 'left',
        frames: 5,
    },
    {
        name: 'up',
        frames: 5,
    },
    {
        name: 'throwD',
        frames: 2,
    },
    {
        name: 'throwR',
        frames: 2,
    },
    {
        name: 'throwL',
        frames: 2,
    },
    {
        name: 'throwU',
        frames: 2,
    },
    {
        name: 'victory',
        frames: 3,
    },
    {
        name: 'idle',
        frames: 6,
    },
    {
        name: 'defeat',
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc:[],
    }
    if(stateBomber == "down" || stateBomber == "up" || stateBomber == "left" || stateBomber == "right" || stateBomber == "throwD" || stateBomber == "throwU"){
        spriteW = 16;
        spriteH = 23.5;
    } else if (stateBomber == "throwL"){
        spriteW = 18;
        spriteH = 23.7;
    } else if (stateBomber == "throwR"){
        spriteW = 16.8;
        spriteH = 23.7;
    } else if (stateBomber == "victory"){
        spriteW = 16;
        spriteH = 23.7;
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteW;
        let positionY = index*spriteH;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})
console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0,0,w,h);
    let position = Math.floor(gameFrame/staggerFrames)% spriteAnimations[stateBomber].loc.length;
    let frameX = spriteW*position;
    let frameY = 0;
    if(stateBomber == "down" || stateBomber == "up" || stateBomber == "left" || stateBomber == "right" || stateBomber == "throwD" || stateBomber == "throwU"){
        frameY = spriteAnimations[stateBomber].loc[position].y;
    } else if (stateBomber == "throwL"){
        framey =  
    } else if (stateBomber == "throwR"){
        spriteW = 16.8;
        spriteH = 23.7;
    } else if (stateBomber == "victory"){
        spriteW = 16;
        spriteH = 23.7;
    }
        frameY = spriteAnimations[stateBomber].loc[position].y;
    }
    ctx.drawImage(playerImage,frameX,frameY,spriteW,spriteH,16,24,16*escala,24*escala);

    gameFrame++;
    requestAnimationFrame(animate);

}
animate();