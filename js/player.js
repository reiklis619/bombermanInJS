export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById('bomberImage');
        this.width = 13;
        this.height = 18;
        this.y = 25;
        this.x = 25;
        this.posX = 31;
        this.posY = 4;
        this.frameX = 0;
        this.frameY = 0;
        this.disX = 15.7;
        this.disY = 19;
    }
    draw(context){
        context.drawImage(this.image, this.posX+(this.frameX*this.disX),this.posY+(this.frameY*this.disY),this.width,this.height, this.x, this.y,this.height ,this.width*2.2);
    }
    mDerecha () {
        this.x += 5;
    }
    mIzquierda () {
        this.x -= 5;
    }
    mArriba () {
        this.y -= 5;
    }
    mAbajo () {
        this.y += 5; 
    }
    quieto(){
        this.x +=0;
    }
    animaDerecha(){
        this.frameY = 0;
        if((this.frameX ==1) || (this.frameX == 2) || (this.frameX ==0) ){
            this.frameX=3
        }else if(this.frameX<5){
            this.frameX++;
        } else{
            this.frameX = 3;
        }
    }
    animaIzquierda(){
        this.frameY = 0;
        if(this.frameX<2){
            this.frameX +=1;
        } else{
            this.frameX = 0;
        }
    }
    animaArriba(){
        this.frameY = 1;
        if((this.frameX ==1) || (this.frameX == 2) || (this.frameX ==0) ){
            this.frameX=3
        }else if(this.frameX<5){
            this.frameX++;
        } else{
            this.frameX = 3;
        }
    }
    animaAbajo(){
        this.frameY = 1;
        if(this.frameX<2){
            this.frameX +=1;
        } else{
            this.frameX = 0;
        }
    }
}