const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext("2d")

let dragon1 = new Image()
let dragon2 = new Image()
let dragon3 = new Image()
dragon1.src = "./img/dragon1.png"
dragon2.src = "./img/dragon2.png"
dragon3.src = "./img/dragon3.png"

class Dragon {
    constructor(){
        this.x = canvas2.width + 20;
        this.y = 0;
        this.speed = 8;
        this.dragHi = 60;
        this.dragWi = 59;
        this.dragonAni = [dragon1, dragon2, dragon3];
        this.currentFrame = 0;
        this.playeryUpdateFlag = false;

        setInterval(() => {
            this.currentFrame = (this.currentFrame + 1) % this.dragonAni.length;
        }, 200);
    }

    draw() {
        c2.clearRect(0, 0, canvas2.width, canvas2.height);
        c2.drawImage(this.dragonAni[this.currentFrame], this.x, this.y, this.dragWi, this.dragHi);
 
    }

    hitbox() {
        let dragonRight = this.x + this.dragWi;
        let dragonBottom = this.y + this.dragHi;
        let playerRight = player.playerInitialPosition + player.scale - 15;
        let playerBottom = player.y + player.scale;

        if (player.moveRight || player.moveLeft) {
            playerRight -=20
        }

        if (this.x < playerRight && 
            dragonRight > player.playerInitialPosition && 
            this.y < playerBottom && 
            dragonBottom > player.y) {
                console.log(`hit, ${this.x}, ${playerRight}`);
                gameOver();
        }
    }

    update() {
        if (!this.playeryUpdateFlag){
            this.playeryUpdateFlag = true;
            this.y = player.y - 10;
        };
        if (this.x > 0) {
            this.draw()
        } else  if (this.x < 0 - this.dragWi) {
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
        }
        
        if (player.moveRight) {
            this.x -= player.speed + this.speed;
        } else if (player.moveLeft) {
            this.x += player.speed - this.speed -3;
        } else {
            this.x -= this.speed;
        }

    }
}