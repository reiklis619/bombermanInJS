export default class Enemy {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById('bomberImage');
        this.width = 16;
        this.height = 17;
        this.y = 80;
        this.x = 80;
        this.posX = 16;
        this.posY = 63;
        this.frameX = 0;
        this.frameY = 0;
        this.disX = 16;
        this.disY = 19;
    }
    draw(context){
        context.drawImage(this.image, this.posX+(this.frameX*this.disX),this.posY+(this.frameY*this.disY),this.width,this.height, this.x, this.y,this.height*3 ,this.width*4.5);
    }
}