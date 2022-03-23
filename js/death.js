export default class Death {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById('bomberImage');
        this.width = 12;
        this.height = 14;
        this.y = 120;
        this.x = 120;
        this.posX = 55;
        this.posY = 244;
        this.frameX = 0;
        this.disX = 12;
    }
    draw(context){
        context.drawImage(this.image, this.posX+(this.frameX*this.disX),this.posY,this.width,this.height, this.x, this.y,this.height*3 ,this.width*4.5);
    }
}