export default class inputHandler {
    constructor() {
        this.lastKey = '';
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
                    break
                case "ArrowRight":
                    this.lastKey = "PRESS right";
                    break
                case "ArrowUp":
                    this.lastKey = "PRESS up";
                    break
                case "ArrowDown":
                    this.lastKey = "PRESS down";
                    break
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                    break
                case "ArrowRight":
                    this.lastKey = "RELEASE right";
                    break
                case "ArrowUp":
                    this.lastKey = "RELEASE up";
                    break
                case "ArrowDown":
                    this.lastKey = "RELEASE down";
                    break
            }
        });
    }
}