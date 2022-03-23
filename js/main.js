import Player from './player.js';
import Enemy from './enemy.js';
import Death from './death.js';
import Bomb from './bomb.js';
import inputHandler from './input.js';


window.addEventListener('load', function() {
    const loading = this.document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    //draw personaje
    const player = new Player(canvas.width, canvas.height);
    const enemy = new Enemy(canvas.width, canvas.height);
    enemy.draw(ctx);
    const death = new Death(canvas.width, canvas.height);
    death.draw(ctx);
    const bomb = new Bomb(canvas.width, canvas.height);
    bomb.draw(ctx);

    const input = new inputHandler();
    // animacion
    function animate() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillRect(49, 52, 28, 28);
        player.update(input.lastKey);
        player.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
    // walls
    ctx.fillRect(100, 100, 50, 50);
    //movimiento
    let body = document.getElementById("body");

    body.addEventListener("keydown", mover);

    function mover (e) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        if(player.x<16 ){
            player.x++;
            console.log("colin");
        } else if (player.x+15>580){
            player.x -= 1;
        } else if (player.y<16){
            player.y += 1;
        }else if(player.y>340){
            player.y -= 1;
        }
        else {
            
            switch (e.key) {
                case "ArrowUp" :
                    player.mArriba();
                    break;
                case "ArrowDown" :
                    player.mAbajo();
                    break;
                case "ArrowLeft" :
                    player.mIzquierda();
                    break;
                case "ArrowRight" :
                    player.mDerecha();
                    break;
        }
        }
        player.draw(ctx); 
    }
    

})
