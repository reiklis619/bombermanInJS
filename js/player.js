import { StandingDown, Standingleft, StandingRight, StandingUp} from "./state.js";


export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new Standingleft(this),new StandingRight(this),new StandingUp(this), new StandingDown(this)];
        this.currentState = this.states[1];
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
    update(input){
        this.currentState.handleInput(input)
    }
    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
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
}