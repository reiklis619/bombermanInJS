const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const w = canvas.width = 600;
const h = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'img/bomber.png';
let stateBomber = "down" ;
var escala = 2;
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
    
];
animationStates.forEach((state, index) => {
    let frames = {
        loc:[],
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
    let frameY = spriteAnimations[stateBomber].loc[position].y;
    ctx.drawImage(playerImage,frameX,frameY,spriteW,spriteH,16,24,16*escala,24*escala);

    gameFrame++;
    requestAnimationFrame(animate);

}
animate();