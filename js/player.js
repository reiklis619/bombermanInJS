export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById('bomberImage');
        this.width = 13;
        this.height = 18;
        this.y = 40;
        this.x = 40;
        this.posX = 31;
        this.posY = 4;
        this.frameX = 0;
        this.frameY = 0;
        this.disX = 15.7;
        this.disY = 19;
    }
    draw(context){
        context.drawImage(this.image, this.posX+(this.frameX*this.disX),this.posY+(this.frameY*this.disY),this.width,this.height, this.x, this.y,this.height*3 ,this.width*4.5);
    }
}