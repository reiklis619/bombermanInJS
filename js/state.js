export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT:1,
    STANDING_UP:2,
    STANDING_DOWN:3,
}

class State{
    constructor(state){
        this.state = state;
    }
}

export class Standingleft extends State {
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
    }
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(states.STANDING_RIGHT);
    }
}
export class StandingRight extends State {
    constructor(player){
        super('STANDING RIGHT');
        this.player = player;
    }
    enter(){
        this.player.frameX = 3;
    }
    handleInput(input){
        if(input === 'PRESS left') this.player.setState(states.STANDING_LEFT);
    }
}
export class StandingUp extends State {
    constructor(player){
        super('STANDING UP');
        this.player = player;
    }
    enter(){
        this.player.frameX = 3;
        this.player.frameY = 1;
    }
    handleInput(input){
        if(input === 'PRESS down') this.player.setState(states.STANDING_DOWN);
    }
}
export class StandingDown extends State {
    constructor(player){
        super('STANDING DOWN');
        this.player = player;
    }
    enter(){
        this.player.frameX = 0;
        this.player.frameY = 1;
    }
    handleInput(input){
        if(input === 'PRESS up') this.player.setState(states.STANDING_UP);
    }
}