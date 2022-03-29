export default class Bomb {
    constructor(gameWidth, gameHeight,) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById('bomberImage');
        this.width = 16;
        this.height = 16;
        this.y = 20;
        this.x = 20;
        this.posX = 51;
        this.posY = 264;
        this.frameX = 0;
        this.disX = 17;
    }
    draw(context){
        context.drawImage(this.image, this.posX+(this.frameX*this.disX),this.posY,this.width,this.height, this.x, this.y,this.height*3 ,this.width*3);
    }
    explotar(){
        
    }
}