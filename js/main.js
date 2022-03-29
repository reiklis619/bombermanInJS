import Player from './player.js';
import Enemy from './enemy.js';
import Death from './death.js';
import Bomb from './bomb.js';
import inputHandler from './input.js';


window.addEventListener('load', main);

function main() {
    const loading = this.document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 420;
    var vidas = 1;

    //draw personaje
    const player = new Player(canvas.width, canvas.height);
    const enemy = new Enemy(canvas.width, canvas.height,210,90);
    const enemy1 = new Enemy(canvas.width, canvas.height,210,410);
    const death = new Death(canvas.width, canvas.height);
    death.draw(ctx);
    let bomb = new Array();

    const input = new inputHandler();
    // animacion

    window.requestAnimationFrame(animate);

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        player.draw(ctx);
        enemy.draw(ctx);
        enemy1.draw(ctx);

        enemyMove();
        window.requestAnimationFrame (animate);
    }
    //Score
    function Score() {
        ctx.font = '30px Arial';
        ctx.fillText('LIFES:'+ vidas, 20,410);
        if(player.x+player.width>enemy.x&&player.x<enemy.x+enemy.width
            &&player.y+5+player.height>enemy.y&&player.y-10<enemy.y+enemy.height){
            vidas -=1;
            enemy.vx = enemy.vx*-1;
            player.y=25;
            player.x=25
        }else if(vidas == 0){
            location.reload();
        }
    }
    //bomb
    function nuevaBomba(){
        bomb.push(new Bomb(canvas.width, canvas.height));
        console.log(bomb);
    }
    // walls

    //movimiento
    let body = document.getElementById("body");

    body.addEventListener("keydown", mover);

    function mover (e) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        if(player.x<16 ){
            player.x += 1;
            console.log("colin");
        } else if (player.x+15>580){
            player.x -= 1;
        } else if (player.y<16 || (player.x>50-13&&player.x<80&&player.y<80&&player.y>52)){
            player.y += 1;
        }else if(player.y>340){
            player.y -= 1;
        }
        else {
            
            switch (e.key) {
                case "ArrowUp" :
                    player.mArriba();
                    player.animaArriba();
                    break;
                case "w" :
                    player.mArriba();
                    player.animaArriba();
                    break;
                case "ArrowDown" :
                    player.mAbajo();
                    player.animaAbajo();
                    break;
                case "s" :
                    player.mAbajo();
                    player.animaAbajo();
                    break;
                case "ArrowLeft" :
                    player.mIzquierda();
                    player.animaIzquierda();
                    break;
                case "a" :
                    player.mIzquierda();
                    player.animaIzquierda();
                    break;
                case "ArrowRight":
                    player.mDerecha();
                    player.animaDerecha();
                    break;
                case "d":
                    player.mDerecha();
                    player.animaDerecha();
                    break;
                case "x":
                    nuevaBomba();
                    break;

        }
        }
        
    }
    
    //enemy
    function enemyMove(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        enemy.movimiento();
        if(enemy.x>530 || enemy.x<80){
            enemy.vx = enemy.vx*-1;
        } else{
            enemy.vx*1
        }
        player.draw(ctx); 
        enemy.draw(ctx);
        Score();
    }
}
